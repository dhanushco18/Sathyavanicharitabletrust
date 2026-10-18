"use client";

import React, { useState } from "react";
import { Plus, Edit2, Calendar, MapPin, ExternalLink, X, AlertCircle } from "lucide-react";
import { EventRecord, EventStatus } from "@/lib/db/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { dataRepository } from "@/lib/db/client";

interface EventsManagerProps {
  initialEvents: EventRecord[];
  canManage: boolean;
}

export function EventsManager({ initialEvents, canManage }: EventsManagerProps) {
  const [events, setEvents] = useState<EventRecord[]>(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventRecord | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("Library Learning Center, Chennai");
  const [category, setCategory] = useState("Academic Coaching");
  const [status, setStatus] = useState<EventStatus>("published");

  const openCreateModal = () => {
    setEditingEvent(null);
    setTitle("");
    setSlug("");
    setDescription("");
    setEventDate(new Date().toISOString().split("T")[0]);
    setLocation("Library Learning Center, Chennai");
    setCategory("Academic Coaching");
    setStatus("published");
    setIsModalOpen(true);
  };

  const openEditModal = (evt: EventRecord) => {
    setEditingEvent(evt);
    setTitle(evt.title);
    setSlug(evt.slug);
    setDescription(evt.description);
    setEventDate(new Date(evt.event_date).toISOString().split("T")[0]);
    setLocation(evt.location);
    setCategory(evt.category);
    setStatus(evt.status);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const saved = dataRepository.saveEvent({
      id: editingEvent?.id,
      title: title.trim(),
      slug: slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      description: description.trim(),
      event_date: new Date(eventDate).toISOString(),
      location: location.trim(),
      category: category.trim(),
      status,
    });

    if (editingEvent) {
      setEvents(events.map((ev) => (ev.id === saved.id ? saved : ev)));
    } else {
      setEvents([saved, ...events]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-slate-900">
            Trust Drives & Events ({events.length})
          </h2>
          <p className="text-xs text-slate-500">
            Track daily tutoring schedules, completed distributions, and upcoming community drives.
          </p>
        </div>

        {canManage && (
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs shadow-subtle transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Schedule New Event</span>
          </button>
        )}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((evt) => (
          <Card key={evt.id} className="p-5 flex flex-col justify-between border-slate-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <Badge
                  variant={
                    evt.status === "published"
                      ? "teal"
                      : evt.status === "completed"
                      ? "navy"
                      : "amber"
                  }
                  size="sm"
                >
                  {evt.status.toUpperCase()}
                </Badge>
                <span className="text-[11px] font-semibold text-slate-400">{evt.category}</span>
              </div>

              <h3 className="font-heading font-bold text-slate-900 text-base">{evt.title}</h3>

              <div className="text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                  <span>
                    {new Date(evt.event_date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span className="truncate">{evt.location}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                {evt.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="/events"
                target="_blank"
                className="text-[11px] text-slate-500 hover:text-brand-navy inline-flex items-center gap-1 font-medium"
              >
                <span>View Public Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {canManage && (
                <button
                  onClick={() => openEditModal(evt)}
                  className="p-1.5 text-slate-500 hover:text-brand-navy hover:bg-slate-100 rounded-lg transition-colors inline-flex items-center gap-1 text-xs font-semibold"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                {editingEvent ? "Edit Event" : "Schedule Drive / Event"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Event Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Date *</label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as EventStatus)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Location *</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-brand-navy text-white font-semibold rounded-xl"
                >
                  {editingEvent ? "Update Event" : "Create Event"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
