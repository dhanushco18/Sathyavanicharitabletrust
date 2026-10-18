"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2, CheckCircle2, AlertCircle, BookOpen, ExternalLink, X } from "lucide-react";
import { ProgramRecord, ContentStatus } from "@/lib/db/types";
import { saveProgramAction, deleteProgramAction } from "../actions";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface ProgramsManagerProps {
  initialPrograms: ProgramRecord[];
  canManage: boolean;
}

export function ProgramsManager({ initialPrograms, canManage }: ProgramsManagerProps) {
  const [programs, setPrograms] = useState<ProgramRecord[]>(initialPrograms);
  const [editingProgram, setEditingProgram] = useState<ProgramRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Education");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [location, setLocation] = useState("Library Learning Center, Chennai");
  const [status, setStatus] = useState<ContentStatus>("published");
  const [sortOrder, setSortOrder] = useState(1);

  const openCreateModal = () => {
    setEditingProgram(null);
    setTitle("");
    setSlug("");
    setCategory("Education");
    setShortDesc("");
    setFullDesc("");
    setFeaturedImage("");
    setLocation("Library Learning Center, Chennai");
    setStatus("published");
    setSortOrder(programs.length + 1);
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (prog: ProgramRecord) => {
    setEditingProgram(prog);
    setTitle(prog.title);
    setSlug(prog.slug);
    setCategory(prog.category);
    setShortDesc(prog.short_description);
    setFullDesc(prog.full_description);
    setFeaturedImage(prog.featured_image || "");
    setLocation(prog.location);
    setStatus(prog.status);
    setSortOrder(prog.sort_order);
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingProgram) {
      // Auto-generate slug from title
      const genSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(genSlug);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim()) {
      setFormError("Title and URL slug are required.");
      return;
    }

    setIsSaving(true);
    setFormError(null);

    const res = await saveProgramAction({
      id: editingProgram?.id,
      title: title.trim(),
      slug: slug.trim(),
      category: category.trim(),
      short_description: shortDesc.trim(),
      full_description: fullDesc.trim(),
      featured_image: featuredImage.trim() || null,
      location: location.trim(),
      status,
      sort_order: sortOrder,
    });

    setIsSaving(false);

    if (!res.success) {
      setFormError(res.error || "Failed to save program.");
      return;
    }

    // Refresh local state
    if (res.data) {
      const saved = res.data as ProgramRecord;
      if (editingProgram) {
        setPrograms(programs.map((p) => (p.id === saved.id ? saved : p)));
      } else {
        setPrograms([...programs, saved]);
      }
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string, progTitle: string) => {
    if (!confirm(`Are you sure you want to delete the program "${progTitle}"?`)) {
      return;
    }
    const res = await deleteProgramAction(id);
    if (res.success) {
      setPrograms(programs.filter((p) => p.id !== id));
    } else {
      alert(res.error || "Failed to delete program.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-slate-900">
            Trust Programs & Initiatives ({programs.length})
          </h2>
          <p className="text-xs text-slate-500">
            Manage public charity pillars, curriculum summaries, and publication statuses.
          </p>
        </div>

        {canManage && (
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs shadow-subtle transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Program</span>
          </button>
        )}
      </div>

      {/* Programs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((prog) => (
          <Card key={prog.id} className="p-5 flex flex-col justify-between border-slate-200">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <Badge variant={prog.status === "published" ? "teal" : "amber"} size="sm">
                  {prog.status}
                </Badge>
                <span className="text-[11px] font-bold text-slate-400">Order: #{prog.sort_order}</span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-900 text-base">{prog.title}</h3>
                <span className="text-[11px] text-brand-navy font-semibold">/{prog.slug}</span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {prog.short_description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`/programs/${prog.slug}`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-slate-500 hover:text-brand-navy inline-flex items-center gap-1 font-medium"
              >
                <span>Preview</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {canManage && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(prog)}
                    className="p-1.5 text-slate-500 hover:text-brand-navy hover:bg-slate-100 rounded-lg transition-colors"
                    title="Edit Program"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(prog.id, prog.title)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Program"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Editor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-elevated border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-heading font-bold text-slate-900 text-lg">
                {editingProgram ? "Edit Program Details" : "Create New Program"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Program Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Free Computer Literacy"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">URL Slug *</label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="e.g. computer-literacy"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-navy/20 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  >
                    <option value="Education">Education</option>
                    <option value="Child Welfare">Child Welfare</option>
                    <option value="Community Welfare">Community Welfare</option>
                    <option value="Seasonal">Festival / Seasonal</option>
                    <option value="Environment">Environment</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as ContentStatus)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Sort Order</label>
                  <input
                    type="number"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(Number(e.target.value))}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Short Summary *</label>
                <textarea
                  required
                  rows={2}
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  placeholder="One sentence description for cards"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Full Description</label>
                <textarea
                  rows={4}
                  value={fullDesc}
                  onChange={(e) => setFullDesc(e.target.value)}
                  placeholder="Comprehensive program details, schedules, and operations..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Banner Image URL</label>
                  <input
                    type="url"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 font-semibold rounded-xl text-xs hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 bg-brand-navy text-white font-semibold rounded-xl text-xs hover:bg-brand-navy/90 disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : editingProgram ? "Update Program" : "Save New Program"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
