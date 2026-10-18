"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import Image from "next/image";
import { Upload, Image as ImageIcon, CheckCircle2, AlertCircle, FileCheck, X } from "lucide-react";
import { MediaAssetRecord } from "@/lib/db/types";
import { dataRepository } from "@/lib/db/client";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface MediaManagerProps {
  initialMedia: MediaAssetRecord[];
}

export function MediaManager({ initialMedia }: MediaManagerProps) {
  const [mediaList, setMediaList] = useState<MediaAssetRecord[]>(initialMedia);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [storagePath, setStoragePath] = useState("");
  const [fileType, setFileType] = useState("image/webp");
  const [fileSizeKb, setFileSizeKb] = useState(150);
  const [altText, setAltText] = useState("");
  const [consentOnFile, setConsentOnFile] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleUploadSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!altText.trim()) {
      setErrorMsg("Accessible alt text is strictly required for all trust images.");
      return;
    }

    if (!fileName.trim() || !storagePath.trim()) {
      setErrorMsg("File name and URL / storage path are required.");
      return;
    }

    // File type validation check
    const allowed = ["image/webp", "image/png", "image/jpeg"];
    if (!allowed.includes(fileType)) {
      setErrorMsg("Disallowed file format. Only webp, png, and jpeg are supported.");
      return;
    }

    const saved = dataRepository.saveMedia({
      file_name: fileName.trim(),
      storage_path: storagePath.trim(),
      file_type: fileType,
      file_size_bytes: fileSizeKb * 1024,
      alt_text: altText.trim(),
      consent_on_file: consentOnFile,
    });

    setMediaList([saved, ...mediaList]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-brand-navy" />
            Media Library & Assets ({mediaList.length})
          </h2>
          <p className="text-xs text-slate-500">
            Secure asset repository with mandatory alt-text verification and minor consent tracking.
          </p>
        </div>

        <button
          onClick={() => {
            setFileName("");
            setStoragePath("");
            setAltText("");
            setErrorMsg(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs shadow-subtle transition-all shrink-0"
        >
          <Upload className="w-4 h-4" />
          <span>Upload / Register Image</span>
        </button>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mediaList.map((asset) => (
          <Card key={asset.id} className="p-4 border-slate-200 flex flex-col justify-between">
            <div className="space-y-3">
              {/* Thumbnail Container */}
              <div className="w-full h-36 bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200">
                <img
                  src={asset.storage_path}
                  alt={asset.alt_text}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-heading font-bold text-slate-900 text-xs truncate" title={asset.file_name}>
                  {asset.file_name}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 italic mt-0.5">
                  &ldquo;{asset.alt_text}&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>{asset.file_type}</span>
                <span>{(asset.file_size_bytes / 1024).toFixed(0)} KB</span>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              {asset.consent_on_file ? (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Consent Verified
                </span>
              ) : (
                <span className="text-rose-600 font-semibold">Consent Missing</span>
              )}

              <a
                href={asset.storage_path}
                target="_blank"
                rel="noreferrer"
                className="text-brand-navy hover:underline font-semibold"
              >
                Inspect
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* Media Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-elevated border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Register New Media Asset
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleUploadSimulate} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">File Name *</label>
                <input
                  type="text"
                  required
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  placeholder="e.g. tuition-class-group-photo.webp"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Storage URL / Path *</label>
                <input
                  type="url"
                  required
                  value={storagePath}
                  onChange={(e) => setStoragePath(e.target.value)}
                  placeholder="https://images.unsplash.com/... or /assets/..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">MIME Type</label>
                  <select
                    value={fileType}
                    onChange={(e) => setFileType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="image/webp">image/webp</option>
                    <option value="image/png">image/png</option>
                    <option value="image/jpeg">image/jpeg</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Size (KB)</label>
                  <input
                    type="number"
                    value={fileSizeKb}
                    onChange={(e) => setFileSizeKb(Number(e.target.value))}
                    max={5120} // 5MB limit
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">
                  Descriptive Alt Text * (Mandatory for Accessibility)
                </label>
                <textarea
                  required
                  rows={2}
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="Accurately describe what is shown for screen readers..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  id="consentMedia"
                  type="checkbox"
                  checked={consentOnFile}
                  onChange={(e) => setConsentOnFile(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-navy"
                />
                <label htmlFor="consentMedia" className="text-slate-700 font-semibold">
                  Parental / Beneficiary Consent Verified
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
                  className="px-5 py-2 bg-brand-navy text-white font-semibold rounded-xl"
                >
                  Register Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
