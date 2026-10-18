"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2, CheckCircle2, AlertCircle, FileText, ExternalLink, X, ShieldAlert } from "lucide-react";
import { StoryRecord } from "@/lib/db/types";
import { saveStoryAction } from "../actions";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface StoriesManagerProps {
  initialStories: StoryRecord[];
  canManage: boolean;
}

export function StoriesManager({ initialStories, canManage }: StoriesManagerProps) {
  const [stories, setStories] = useState<StoryRecord[]>(initialStories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<StoryRecord | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Education Milestone");
  const [excerpt, setExcerpt] = useState("");
  const [contentMarkdown, setContentMarkdown] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [consentVerified, setConsentVerified] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const openCreateModal = () => {
    setEditingStory(null);
    setTitle("");
    setSlug("");
    setCategory("Education Milestone");
    setExcerpt("");
    setContentMarkdown("");
    setCoverImageUrl("");
    setConsentVerified(false);
    setIsPublished(false);
    setErrorMessage(null);
    setIsModalOpen(true);
  };

  const openEditModal = (story: StoryRecord) => {
    setEditingStory(story);
    setTitle(story.title);
    setSlug(story.slug);
    setCategory(story.category);
    setExcerpt(story.excerpt);
    setContentMarkdown(story.content_markdown);
    setCoverImageUrl(story.cover_image_url || "");
    setConsentVerified(story.consent_verified);
    setIsPublished(story.is_published);
    setErrorMessage(null);
    setIsModalOpen(true);
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingStory) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isPublished && !consentVerified) {
      setErrorMessage(
        "Safeguarding Violation: You cannot publish this story without certifying that parental / guardian consent is on file."
      );
      return;
    }

    setIsSaving(true);
    setErrorMessage(null);

    const res = await saveStoryAction({
      id: editingStory?.id,
      title: title.trim(),
      slug: slug.trim(),
      category: category.trim(),
      excerpt: excerpt.trim(),
      content_markdown: contentMarkdown.trim(),
      cover_image_url: coverImageUrl.trim() || null,
      consent_verified: consentVerified,
      is_published: isPublished,
    });

    setIsSaving(false);

    if (!res.success) {
      setErrorMessage(res.error || "Failed to save story.");
      return;
    }

    if (res.data) {
      const saved = res.data as StoryRecord;
      if (editingStory) {
        setStories(stories.map((s) => (s.id === saved.id ? saved : s)));
      } else {
        setStories([saved, ...stories]);
      }
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-slate-900">
            Stories & Case Studies ({stories.length})
          </h2>
          <p className="text-xs text-slate-500">
            Field updates, student progression, and community testimonials under strict minor protection rules.
          </p>
        </div>

        {canManage && (
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs shadow-subtle transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Story</span>
          </button>
        )}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {stories.map((story) => (
          <Card key={story.id} className="p-5 flex flex-col justify-between border-slate-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <Badge variant={story.is_published ? "teal" : "amber"} size="sm">
                    {story.is_published ? "Published" : "Draft"}
                  </Badge>
                  {story.consent_verified ? (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Consent Verified
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                      Consent Missing
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400">{story.category}</span>
              </div>

              <h3 className="font-heading font-bold text-slate-900 text-base">{story.title}</h3>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{story.excerpt}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="/stories"
                target="_blank"
                className="text-[11px] text-slate-500 hover:text-brand-navy inline-flex items-center gap-1 font-medium"
              >
                <span>View Public Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {canManage && (
                <button
                  onClick={() => openEditModal(story)}
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

      {/* Story Editor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-elevated border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                {editingStory ? "Edit Story" : "Author New Field Story"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Story Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Science Fair Breakthrough"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">URL Slug *</label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Education, Community Joy, etc."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Excerpt / Card Summary *</label>
                <textarea
                  required
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Full Content (Markdown Supported) *</label>
                <textarea
                  required
                  rows={5}
                  value={contentMarkdown}
                  onChange={(e) => setContentMarkdown(e.target.value)}
                  placeholder="Story narrative..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Cover Image URL</label>
                <input
                  type="url"
                  value={coverImageUrl}
                  onChange={(e) => setCoverImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              {/* Safeguarding Consent Certification */}
              <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
                <div className="flex items-start gap-2.5">
                  <input
                    id="consentCheck"
                    type="checkbox"
                    checked={consentVerified}
                    onChange={(e) => setConsentVerified(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-brand-navy border-slate-300 focus:ring-brand-navy"
                  />
                  <label htmlFor="consentCheck" className="text-[11px] text-rose-950 leading-relaxed">
                    <strong>Mandatory Child Protection Certification:</strong> I certify that written
                    parental or guardian consent is on file for all minor children identified or
                    photographed in this update.
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  id="pubCheck"
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-navy"
                />
                <label htmlFor="pubCheck" className="font-semibold text-slate-800">
                  Publish to Public Website
                </label>
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
                  disabled={isSaving}
                  className="px-5 py-2 bg-brand-navy text-white font-semibold rounded-xl disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : editingStory ? "Update Story" : "Save Story"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
