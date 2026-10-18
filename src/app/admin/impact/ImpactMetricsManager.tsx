"use client";

import React, { useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Plus,
  X,
  FileCheck2,
  RotateCcw,
  Download,
  Filter,
} from "lucide-react";
import { ImpactMetricRecord, MetricStatus } from "@/lib/db/types";
import { updateMetricStatusAction, createImpactMetricAction } from "../actions";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface ImpactMetricsManagerProps {
  initialMetrics: ImpactMetricRecord[];
  isSuperAdmin: boolean;
}

export function ImpactMetricsManager({ initialMetrics, isSuperAdmin }: ImpactMetricsManagerProps) {
  const [metrics, setMetrics] = useState<ImpactMetricRecord[]>(initialMetrics);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [periodFilter, setPeriodFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // New Metric Form State
  const [metricKey, setMetricKey] = useState("");
  const [title, setTitle] = useState("");
  const [numericValue, setNumericValue] = useState<number>(100);
  const [displaySuffix, setDisplaySuffix] = useState("+");
  const [unit, setUnit] = useState("Students");
  const [reportingPeriod, setReportingPeriod] = useState("2024-2025");
  const [description, setDescription] = useState("");
  const [methodology, setMethodology] = useState("");
  const [verificationSource, setVerificationSource] = useState("");

  // Extract distinct reporting periods for the filter dropdown
  const distinctPeriods = Array.from(new Set(metrics.map((m) => m.reporting_period))).filter(Boolean);

  // Compute filtered metrics
  const filteredMetrics = metrics.filter((m) => {
    if (periodFilter !== "all" && m.reporting_period !== periodFilter) return false;
    if (statusFilter !== "all" && m.status !== statusFilter) return false;
    return true;
  });

  const handleExportReport = () => {
    const reportData = {
      organization: "Sathiyavani Charitable Trust",
      exportTimestamp: new Date().toISOString(),
      governanceScope: "Verified Charitable Impact Metrics",
      filterCriteria: { period: periodFilter, status: statusFilter },
      metricsCount: filteredMetrics.length,
      metrics: filteredMetrics.map((m) => ({
        id: m.id,
        key: m.metric_key,
        title: m.title,
        value: `${m.numeric_value}${m.display_suffix || ""}`,
        unit: m.unit,
        period: m.reporting_period,
        status: m.status,
        methodology: m.methodology,
        verificationSource: m.verification_source,
        approvedBy: m.approved_by || "Pending Trustee Approval",
        approvedAt: m.approved_at || null,
      })),
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sathiyavani-impact-report-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleStatusTransition = async (metricId: string, targetStatus: MetricStatus) => {
    setIsUpdating(metricId);
    setErrorMessage(null);

    const notes = prompt(`Enter optional review note for transition to "${targetStatus}":`) || undefined;

    const res = await updateMetricStatusAction(metricId, targetStatus, notes);
    setIsUpdating(null);

    if (!res.success) {
      setErrorMessage(res.error || "Failed to update metric status.");
      return;
    }

    if (res.data) {
      const updated = res.data as ImpactMetricRecord;
      setMetrics(metrics.map((m) => (m.id === updated.id ? updated : m)));
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const res = await createImpactMetricAction({
      metric_key: metricKey.trim(),
      title: title.trim(),
      numeric_value: Number(numericValue),
      display_suffix: displaySuffix.trim(),
      unit: unit.trim(),
      reporting_period: reportingPeriod.trim(),
      description: description.trim(),
      methodology: methodology.trim(),
      verification_source: verificationSource.trim(),
    });

    if (!res.success) {
      setErrorMessage(res.error || "Failed to create metric.");
      return;
    }

    if (res.data) {
      setMetrics([...metrics, res.data as ImpactMetricRecord]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-navy" />
            Impact Metrics & Multi-Stage Governance ({metrics.length})
          </h2>
          <p className="text-xs text-slate-500">
            Strict 4-stage lifecycle: Draft &rarr; Submitted &rarr; Approved &rarr; Published. Only
            published figures appear on public routes.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportReport}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition-colors shrink-0"
            title="Download JSON Report"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Export Report ({filteredMetrics.length})</span>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs shadow-subtle transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Propose New Metric</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="font-bold text-slate-700">Filter Records:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Period Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-semibold">Period:</span>
            <select
              value={periodFilter}
              onChange={(e) => setPeriodFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium text-xs"
            >
              <option value="all">All Reporting Periods</option>
              {distinctPeriods.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-semibold">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium text-xs"
            >
              <option value="all">All Statuses</option>
              <option value="published">Published (Live)</option>
              <option value="approved">Approved</option>
              <option value="submitted">Submitted (Under Review)</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Governance Advisory Callout */}
      <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs text-amber-900 space-y-1">
        <span className="font-bold block">Strict Metric Integrity Policy:</span>
        <p className="text-[11px] text-amber-800 leading-relaxed">
          Sathiyavani Charitable Trust mandates physical proof for all public numbers. Fabricating counts,
          animating fake counters, or publishing unverified projections as facts is strictly prohibited.
          Only Super Administrators (Managing Trustees) can grant final publication approval.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Metrics Table / Cards */}
      <div className="space-y-4">
        {filteredMetrics.length === 0 ? (
          <div className="py-12 bg-white rounded-3xl border border-slate-200 text-center text-slate-500 space-y-2">
            <BarChart3 className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold text-slate-700">No Matching Metrics Found</p>
            <p className="text-xs text-slate-400">Try adjusting your active period or status filters.</p>
          </div>
        ) : (
          filteredMetrics.map((metric) => {
          const isPending = isUpdating === metric.id;

          return (
            <Card key={metric.id} className="p-5 sm:p-6 border-slate-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant={
                        metric.status === "published"
                          ? "teal"
                          : metric.status === "approved"
                          ? "navy"
                          : metric.status === "submitted"
                          ? "amber"
                          : "terracotta"
                      }
                      size="sm"
                    >
                      {metric.status.toUpperCase()}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">key: {metric.metric_key}</span>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                    {metric.title}
                  </h3>

                  <div className="text-xs text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span>
                      Stated Value:{" "}
                      <strong className="text-brand-navy font-bold text-sm">
                        {metric.numeric_value.toLocaleString("en-IN")}
                        {metric.display_suffix}
                      </strong>{" "}
                      ({metric.unit})
                    </span>
                    <span>Reporting Period: <strong>{metric.reporting_period}</strong></span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{metric.description}</p>

                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-500 space-y-0.5 mt-2">
                    <div>
                      <strong>Verification Source:</strong> {metric.verification_source}
                    </div>
                    <div>
                      <strong>Methodology:</strong> {metric.methodology}
                    </div>
                    {metric.reviewer_notes && (
                      <div className="text-slate-700 italic">
                        <strong>Reviewer Sign-off:</strong> {metric.reviewer_notes}
                      </div>
                    )}
                  </div>
                </div>

                {/* Workflow Actions */}
                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2 min-w-[180px] justify-center pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  {/* Draft State: Submit for Review */}
                  {metric.status === "draft" && (
                    <button
                      onClick={() => handleStatusTransition(metric.id, "submitted")}
                      disabled={isPending}
                      className="w-full px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Submit for Review</span>
                    </button>
                  )}

                  {/* Submitted State: Approve or Reject (Super Admin Only) */}
                  {metric.status === "submitted" && (
                    <>
                      {isSuperAdmin ? (
                        <>
                          <button
                            onClick={() => handleStatusTransition(metric.id, "approved")}
                            disabled={isPending}
                            className="w-full px-3 py-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                          >
                            <FileCheck2 className="w-3.5 h-3.5" />
                            <span>Approve Figure</span>
                          </button>
                          <button
                            onClick={() => handleStatusTransition(metric.id, "rejected")}
                            disabled={isPending}
                            className="w-full px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded-xl text-xs transition-colors"
                          >
                            Reject Proposal
                          </button>
                        </>
                      ) : (
                        <span className="text-[11px] text-amber-700 italic text-center p-2 bg-amber-50 rounded-xl">
                          Awaiting Trustee Review
                        </span>
                      )}
                    </>
                  )}

                  {/* Approved State: Publish to Public Website */}
                  {metric.status === "approved" && (
                    <>
                      {isSuperAdmin ? (
                        <button
                          onClick={() => handleStatusTransition(metric.id, "published")}
                          disabled={isPending}
                          className="w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Publish to Website</span>
                        </button>
                      ) : (
                        <span className="text-[11px] text-brand-teal italic text-center p-2 bg-emerald-50 rounded-xl">
                          Approved; Awaiting Public Release
                        </span>
                      )}
                    </>
                  )}

                  {/* Published State: Live status indicator & unpublish option */}
                  {metric.status === "published" && (
                    <div className="space-y-1.5 text-center">
                      <div className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Live on Public Pages</span>
                      </div>
                      {isSuperAdmin && (
                        <button
                          onClick={() => handleStatusTransition(metric.id, "draft")}
                          disabled={isPending}
                          className="block w-full text-[11px] text-slate-400 hover:text-slate-600 hover:underline pt-1"
                        >
                          Unpublish to Draft
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })
      )}
      </div>

      {/* Propose Metric Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Propose New Verified Impact Metric
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Metric Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      if (!metricKey) {
                        setMetricKey(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "_"));
                      }
                    }}
                    placeholder="e.g. Free Eye Screening Attendees"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Metric Key (Identifier) *</label>
                  <input
                    type="text"
                    required
                    value={metricKey}
                    onChange={(e) => setMetricKey(e.target.value)}
                    placeholder="eye_screening_2025"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Numeric Count *</label>
                  <input
                    type="number"
                    required
                    value={numericValue}
                    onChange={(e) => setNumericValue(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Suffix</label>
                  <input
                    type="text"
                    value={displaySuffix}
                    onChange={(e) => setDisplaySuffix(e.target.value)}
                    placeholder="+"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Unit</label>
                  <input
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="Attendees"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Reporting Period *</label>
                <input
                  type="text"
                  required
                  value={reportingPeriod}
                  onChange={(e) => setReportingPeriod(e.target.value)}
                  placeholder="e.g. October 2025 Camp"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Physical Verification Source *</label>
                <input
                  type="text"
                  required
                  value={verificationSource}
                  onChange={(e) => setVerificationSource(e.target.value)}
                  placeholder="e.g. Signed Camp Attendance Register Vol 2"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Methodology & Description *</label>
                <textarea
                  required
                  rows={2}
                  value={methodology}
                  onChange={(e) => setMethodology(e.target.value)}
                  placeholder="How was this number verified?"
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
                  Save as Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
