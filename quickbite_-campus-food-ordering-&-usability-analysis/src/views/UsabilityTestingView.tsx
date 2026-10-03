import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  USABILITY_TEST_PLAN,
  SAMPLE_PARTICIPANTS,
  TEST_SCENARIOS,
  USER_OBSERVATIONS,
  USER_FEEDBACK_ITEMS,
  USABILITY_METRICS,
  DESIGN_IMPROVEMENTS
} from '../data/mockData';
import { SeverityLevel } from '../types';
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  UserCheck,
  TrendingUp,
  FileSpreadsheet,
  ArrowRight,
  Filter,
  PlayCircle,
  Sparkles,
  Info,
  ShieldAlert,
  ThumbsUp,
  Lightbulb,
  AlertCircle,
  Eye,
  BarChart3,
  Layers,
  FileText
} from 'lucide-react';

export const UsabilityTestingView: React.FC = () => {
  const { startTaskRunner, setCurrentView } = useApp();

  const [observationFilter, setObservationFilter] = useState<string>('all');
  const [feedbackCategoryFilter, setFeedbackCategoryFilter] = useState<string>('all');

  const filteredObservations = USER_OBSERVATIONS.filter(obs => {
    if (observationFilter === 'all') return true;
    return obs.severity.toLowerCase() === observationFilter.toLowerCase();
  });

  const filteredFeedback = USER_FEEDBACK_ITEMS.filter(fb => {
    if (feedbackCategoryFilter === 'all') return true;
    return fb.category.toLowerCase() === feedbackCategoryFilter.toLowerCase();
  });

  const getSeverityBadge = (severity: SeverityLevel) => {
    switch (severity) {
      case 'High':
        return (
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
            High Severity
          </span>
        );
      case 'Medium':
        return (
          <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
            Medium Severity
          </span>
        );
      case 'Low':
        return (
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
            Low Severity
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
            None (Smooth)
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 animate-in fade-in duration-200">
      
      {/* 1. Header & Internship Brief Overview */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-300">
            UI/UX Internship Task
          </span>
          <span className="text-xs text-neutral-500 font-medium">
            Usability Testing & Empirical Analysis
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
            Usability Testing & Analysis
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            "Understand how students interact with QuickBite, identify usability issues, and improve the ordering experience through user feedback."
          </p>
        </div>

        {/* 4 Internship Requirements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Requirement 1</span>
            </div>
            <h3 className="text-sm font-bold text-neutral-900">Test Plans & Scenarios</h3>
            <p className="text-xs text-neutral-500">
              Defined objectives, target user profiles, and 5 realistic campus ordering tasks.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Requirement 2</span>
            </div>
            <h3 className="text-sm font-bold text-neutral-900">Recruit & Conduct</h3>
            <p className="text-xs text-neutral-500">
              5 sample student participants (UG & PG) in moderated 10–15m test sessions.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Requirement 3</span>
            </div>
            <h3 className="text-sm font-bold text-neutral-900">Record Observations</h3>
            <p className="text-xs text-neutral-500">
              Documented friction points, severity tagging, and qualitative quotes.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Requirement 4</span>
            </div>
            <h3 className="text-sm font-bold text-neutral-900">Findings & Redesign</h3>
            <p className="text-xs text-neutral-500">
              Actionable Before → After design improvements and V1 vs V2 verification.
            </p>
          </div>
        </div>

        {/* Expected Outcome Box */}
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-amber-950 uppercase tracking-wider block mb-0.5">
              Expected Outcome
            </span>
            <p className="text-amber-900">
              Understand usability metrics, testing methods, and iterative design improvement through empirical evidence rather than subjective speculation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Usability Test Plan */}
      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
            Phase 1 · Research Strategy
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Usability Test Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Core Purpose
            </span>
            <p className="text-xs text-neutral-700 leading-relaxed font-medium">
              "{USABILITY_TEST_PLAN.purpose}"
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Target Users & Sample Size
            </span>
            <p className="text-xs text-neutral-700 leading-relaxed font-medium">
              {USABILITY_TEST_PLAN.targetUsers}
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-bold text-neutral-900">
              <span>Sample: {USABILITY_TEST_PLAN.sampleSize} participants</span>
              <span>·</span>
              <span>Moderated Sessions</span>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Session Parameters & Rigor
            </span>
            <div className="space-y-1 text-xs text-neutral-600">
              <p>Duration: <strong className="text-neutral-900">{USABILITY_TEST_PLAN.sessionDuration}</strong></p>
              <p>Device Context: <strong className="text-neutral-900">{USABILITY_TEST_PLAN.device}</strong></p>
              <p>Format: <strong className="text-neutral-900">Think-Aloud Protocol</strong></p>
            </div>
          </div>
        </div>

        {/* Evaluation Metrics Breakdown */}
        <div className="p-5 bg-neutral-900 text-white rounded-2xl shadow-sm space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Target Metrics Tracked During Sessions
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
            {USABILITY_TEST_PLAN.metrics.map((metric, i) => (
              <div key={i} className="p-3 bg-neutral-800/70 rounded-lg border border-neutral-700 text-xs">
                <span className="text-amber-400 font-mono text-[10px] block mb-1">METRIC 0{i+1}</span>
                <span className="font-medium text-neutral-200">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. User Recruitment / Participant Profile */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-200 pb-3">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
              Phase 2 · Sample User Recruitment
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              Participant Profile
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold border border-neutral-200">
            <Info className="w-3.5 h-3.5 text-neutral-500" />
            <span>SAMPLE / DEMO USER TESTING DATA</span>
          </div>
        </div>

        <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-500 leading-relaxed">
          <strong>Mandatory Notice:</strong> The participant data and observations below represent sample/demo usability evaluation protocols created to validate the design methodology and reporting workflow required by the task brief.
        </div>

        {/* 5 Participant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {SAMPLE_PARTICIPANTS.map(p => (
            <div
              key={p.id}
              className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-3 hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white font-bold text-xs flex items-center justify-center">
                  {p.id}
                </div>
                <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                  {p.studentType}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-neutral-900">{p.name}</h3>
                <p className="text-[11px] text-neutral-500 mt-0.5">{p.major}</p>
              </div>

              <div className="pt-2 border-t border-neutral-100 text-[11px] space-y-1 text-neutral-600">
                <div className="flex justify-between">
                  <span>Dining Frequency:</span>
                  <strong className="text-neutral-900">{p.frequencyOfCafeteriaUse}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Testing Device:</span>
                  <strong className="text-neutral-900">{p.device}</strong>
                </div>
              </div>

              {/* Task Matrix dots */}
              <div className="pt-2 border-t border-neutral-100">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  Task Matrix (T1–T5)
                </span>
                <div className="flex items-center gap-1.5">
                  {p.taskPerformance.map(tp => (
                    <span
                      key={tp.taskId}
                      title={`${tp.taskId}: ${tp.completed ? 'Completed' : 'Friction'} in ${tp.timeSeconds}s`}
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold text-white ${
                        tp.completed && !tp.encounteredIssue
                          ? 'bg-emerald-500'
                          : tp.completed && tp.encounteredIssue
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {tp.taskId.replace('TASK-0', '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Usability Test Scenarios & Interactive Task Runner */}
      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
              Phase 3 · Evaluated Tasks
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              Test Scenarios & Interactive Simulation
            </h2>
          </div>
          <span className="text-xs text-neutral-500">
            Click "Try Scenario in App" to simulate user interaction directly
          </span>
        </div>

        <div className="space-y-4">
          {TEST_SCENARIOS.map(task => (
            <div
              key={task.id}
              className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-2xs space-y-4 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-neutral-900 text-white font-mono font-bold text-xs">
                    {task.taskNumber}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900">
                    {task.scenarioTitle}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-500">
                    Avg: <strong className="text-neutral-900 tabular-nums">{task.timeTakenAvg}</strong>
                  </span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded font-semibold ${
                      task.completionStatus.includes('100%')
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : task.completionStatus.includes('Needs Attention')
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {task.completionStatus}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                <div className="md:col-span-7 space-y-2">
                  <div>
                    <span className="font-bold text-neutral-400 uppercase tracking-wider block mb-0.5">
                      User Prompt / Scenario
                    </span>
                    <p className="text-neutral-800 font-medium leading-relaxed">
                      "{task.taskDescription}"
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-400 uppercase tracking-wider block mb-0.5">
                      Expected Outcome
                    </span>
                    <p className="text-neutral-600">
                      {task.expectedOutcome}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 bg-neutral-50 p-3.5 rounded-xl border border-neutral-100 space-y-2">
                  <span className="font-bold text-neutral-700 uppercase tracking-wider text-[11px] block">
                    Session Notes & Observer Log
                  </span>
                  <p className="text-neutral-600 leading-relaxed">
                    {task.notes}
                  </p>
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => startTaskRunner(task)}
                      className="px-3 py-1.5 bg-neutral-900 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <PlayCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>Test this Scenario in Live App</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. User Observations */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200 pb-3">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
              Phase 4 · Qualitative Field Notes
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              User Observations Table
            </h2>
          </div>

          {/* Severity filter tabs */}
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg text-xs">
            <button
              onClick={() => setObservationFilter('all')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                observationFilter === 'all' ? 'bg-white text-neutral-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              All Severities
            </button>
            <button
              onClick={() => setObservationFilter('medium')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                observationFilter === 'medium' ? 'bg-white text-amber-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => setObservationFilter('low')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                observationFilter === 'low' ? 'bg-white text-blue-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              Low
            </button>
            <button
              onClick={() => setObservationFilter('none')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                observationFilter === 'none' ? 'bg-white text-emerald-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              None
            </button>
          </div>
        </div>

        {/* Observations Table */}
        <div className="overflow-x-auto bg-white rounded-2xl border border-neutral-200 shadow-2xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Participant</th>
                <th className="py-3 px-4">Task</th>
                <th className="py-3 px-6">Observation</th>
                <th className="py-3 px-6">Issue Identified</th>
                <th className="py-3 px-4 text-right">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filteredObservations.map(obs => (
                <tr key={obs.id} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-neutral-900">
                    <span className="w-6 h-6 rounded bg-neutral-100 text-neutral-800 inline-flex items-center justify-center mr-1.5 font-mono">
                      {obs.participantId}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-neutral-700">
                    {obs.taskId}
                  </td>
                  <td className="py-3.5 px-6 text-neutral-800 leading-relaxed font-medium">
                    {obs.observation}
                  </td>
                  <td className="py-3.5 px-6 text-neutral-600 leading-relaxed">
                    {obs.issue}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    {getSeverityBadge(obs.severity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. User Feedback */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200 pb-3">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
              Phase 5 · Verbatim Voice of User
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              User Feedback & Thematic Categorization
            </h2>
          </div>

          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg text-xs">
            <button
              onClick={() => setFeedbackCategoryFilter('all')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                feedbackCategoryFilter === 'all' ? 'bg-white text-neutral-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setFeedbackCategoryFilter('positive')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                feedbackCategoryFilter === 'positive' ? 'bg-white text-emerald-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              Positive
            </button>
            <button
              onClick={() => setFeedbackCategoryFilter('suggestion')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                feedbackCategoryFilter === 'suggestion' ? 'bg-white text-amber-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              Suggestion
            </button>
            <button
              onClick={() => setFeedbackCategoryFilter('usability issue')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                feedbackCategoryFilter === 'usability issue' ? 'bg-white text-red-900 shadow-2xs font-semibold' : 'text-neutral-600'
              }`}
            >
              Usability Issue
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFeedback.map(fb => {
            const isPos = fb.category === 'Positive';
            const isSug = fb.category === 'Suggestion';
            const isIss = fb.category === 'Usability Issue';

            return (
              <div
                key={fb.id}
                className={`p-5 rounded-2xl border shadow-2xs flex flex-col justify-between space-y-3 ${
                  isPos
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : isSug
                    ? 'bg-amber-50/40 border-amber-200'
                    : 'bg-red-50/40 border-red-200'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className={`font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider ${
                        isPos
                          ? 'bg-emerald-100 text-emerald-800'
                          : isSug
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {fb.category}
                    </span>
                    <span className="font-mono text-neutral-500 font-semibold">{fb.participantId}</span>
                  </div>
                  <blockquote className="text-sm font-semibold text-neutral-900 italic leading-snug">
                    "{fb.quote}"
                  </blockquote>
                </div>

                <div className="pt-2 border-t border-black/5 text-[11px] text-neutral-600">
                  {fb.context}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Usability Metrics Dashboard */}
      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
            Phase 6 · Quantitative Rigor
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Usability Metrics
          </h2>
        </div>

        {/* 4 Core KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-1">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Task Completion Rate
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-neutral-900 tabular-nums">
                {USABILITY_METRICS.taskCompletionRate}%
              </span>
              <span className="text-xs font-semibold text-emerald-600">Target &gt; 80%</span>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Percentage of tasks finished without critical moderator intervention.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-1">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Average Task Time
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-neutral-900 tabular-nums">
                {USABILITY_METRICS.averageTaskTimeSeconds}
              </span>
              <span className="text-sm font-bold text-neutral-500">seconds</span>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Average duration from prompt delivery to successful action completion.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-1">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Error Rate
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-neutral-900 tabular-nums">
                {USABILITY_METRICS.errorRate}%
              </span>
              <span className="text-xs font-semibold text-amber-600">3 slip events</span>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Slips mainly centered on checkout pickup time and customization accordion.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-1">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              User Satisfaction
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-amber-600 tabular-nums">
                {USABILITY_METRICS.userSatisfaction}
              </span>
              <span className="text-sm font-bold text-neutral-500">/ 5.0</span>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Post-test Single Ease Question (SEQ) and Likert satisfaction ratings.
            </p>
          </div>
        </div>

        {/* Task-by-Task Completion Rate Horizontal Bar Chart */}
        <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-600" />
              <span>Completion Rate by Test Task (T01 – T05)</span>
            </h3>
            <span className="text-xs text-neutral-400">Benchmark = 80%</span>
          </div>

          <div className="space-y-3 pt-2">
            {USABILITY_METRICS.taskBreakdown.map(tb => (
              <div key={tb.taskId} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-neutral-700">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-neutral-900">{tb.taskId}</span>
                    <span className="text-neutral-500">· {tb.taskName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 font-normal">{tb.avgTimeSeconds}s avg</span>
                    <span className="tabular-nums font-bold text-neutral-900">{tb.completionRate}%</span>
                  </div>
                </div>

                <div className="w-full bg-neutral-100 h-3 rounded-full overflow-hidden flex">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      tb.completionRate === 100
                        ? 'bg-emerald-500'
                        : tb.completionRate >= 80
                        ? 'bg-amber-500'
                        : 'bg-red-400'
                    }`}
                    style={{ width: `${tb.completionRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Disclaimer Note from Brief */}
          <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-500 flex items-start gap-2">
            <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Methodological Note:</strong> These metrics are sample/demo usability-testing data created to demonstrate the UX analysis workflow. Replace them with actual measurements if user testing is conducted.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Key Findings */}
      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
            Phase 7 · Synthesis
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Key Findings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* What Worked Well */}
          <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider">
                What Worked Well
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Food categories:</strong> Students navigated category tabs with zero confusion or backtracking.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Price clarity:</strong> Product cards clearly displayed final item price with prominent Veg indicators.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Cart summary:</strong> The itemized fee breakdown made students trust the ordering process.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Order tracking:</strong> Visual 4-step progress tracker was understood instantly (avg 24 sec).</span>
              </li>
            </ul>
          </div>

          {/* Usability Issues */}
          <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Usability Issues
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">⚠</span>
                <div>
                  <strong>Customization visibility:</strong> Customization options were not immediately noticeable to participants.
                  <span className="block mt-0.5 text-[11px] text-amber-800 font-semibold">Severity: Medium</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">⚠</span>
                <div>
                  <strong>Pickup time hierarchy:</strong> Pickup time needed stronger visual emphasis during checkout.
                  <span className="block mt-0.5 text-[11px] text-amber-800 font-semibold">Severity: Medium</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">⚠</span>
                <div>
                  <strong>Reorder action:</strong> Reorder button was tucked inside an overflow menu rather than on the card.
                  <span className="block mt-0.5 text-[11px] text-blue-700 font-semibold">Severity: Low</span>
                </div>
              </li>
            </ul>
          </div>

          {/* User Pain Points */}
          <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-neutral-900">
              <AlertCircle className="w-5 h-5 text-neutral-700" />
              <h3 className="text-sm font-bold uppercase tracking-wider">
                User Pain Points
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 font-bold">•</span>
                <span><strong>Quicker food discovery:</strong> Students with only a 15-minute gap wanted student favorites upfront.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 font-bold">•</span>
                <span><strong>Overlooked pickup-time:</strong> 1 in 5 students rushed through checkout without confirming the pickup slot.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 font-bold">•</span>
                <span><strong>Clearer add-on controls:</strong> Users expected clear check-states rather than nested text dropdowns.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 9. Design Improvements (Actionable BEFORE -> AFTER) */}
      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
              Phase 8 · Solution Design
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              Design Improvements
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Turning user feedback into actionable interface changes.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('iteration')}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors self-start sm:self-auto"
          >
            <span>See Interactive V1 vs V2</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-6">
          {DESIGN_IMPROVEMENTS.map(imp => (
            <div
              key={imp.id}
              className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider">
                    {imp.improvementNumber}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900">{imp.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">{imp.category}</span>
                  <span>·</span>
                  {getSeverityBadge(imp.severity)}
                </div>
              </div>

              {/* BEFORE vs AFTER Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* BEFORE */}
                <div className="p-4 bg-red-50/50 rounded-xl border border-red-200/80 space-y-1.5 text-xs">
                  <span className="font-bold text-red-800 uppercase tracking-wider text-[11px] block">
                    Before Redesign (Identified Friction)
                  </span>
                  <p className="text-neutral-700 leading-relaxed font-medium">
                    {imp.before}
                  </p>
                </div>

                {/* AFTER */}
                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/80 space-y-1.5 text-xs">
                  <span className="font-bold text-emerald-800 uppercase tracking-wider text-[11px] block">
                    After Redesign (Implemented Improvement)
                  </span>
                  <p className="text-neutral-900 leading-relaxed font-semibold">
                    {imp.after}
                  </p>
                </div>
              </div>

              {/* Rationale */}
              <div className="p-3 bg-neutral-50 rounded-xl text-xs text-neutral-600 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Design Rationale:</strong> {imp.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Direct link to Design Iteration and Full Report */}
      <section className="p-6 sm:p-8 bg-neutral-900 text-white rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Explore Further
          </span>
          <h2 className="text-xl sm:text-2xl font-bold">
            Interactive Design Iteration & Usability Report
          </h2>
          <p className="text-xs text-neutral-300 leading-relaxed">
            See the side-by-side interactive comparison of Version 1 vs Version 2 Checkout, or read the comprehensive executive report.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setCurrentView('iteration')}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>Open Iteration (V1 vs V2)</span>
          </button>
          <button
            onClick={() => setCurrentView('report')}
            className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>View Full Report</span>
          </button>
        </div>
      </section>

    </div>
  );
};
