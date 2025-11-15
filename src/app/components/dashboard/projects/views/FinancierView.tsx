'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UploadCloud, DollarSign, TrendingUp, Check, Sparkles, Calculator } from 'lucide-react';

export default function FinancierView() {
  // Interactive sliders state
  const [monthlyPrice, setMonthlyPrice] = useState(19);
  const [adSpend, setAdSpend] = useState(500);
  const [conversionRate, setConversionRate] = useState(2.5);

  // Calculated metrics
  const [ltv, setLtv] = useState(0);
  const [cac, setCac] = useState(0);
  const [ltvCacRatio, setLtvCacRatio] = useState(0);
  const [monthsToProfitability, setMonthsToProfitability] = useState(0);

  // Recalculate metrics when sliders change
  useEffect(() => {
    // CAC = Cost per acquisition (Ad Spend / (Ad Spend * Conversion Rate / 100))
    const calculatedCAC = adSpend / ((adSpend / 100) * conversionRate / 10);

    // LTV = Customer Lifetime Value (Monthly Price * Average Customer Lifespan in months)
    // Assuming average customer stays for ~24 months
    const calculatedLTV = monthlyPrice * 24;

    // LTV:CAC Ratio
    const ratio = calculatedLTV / calculatedCAC;

    // Months to Profitability (simplified calculation)
    const months = Math.max(3, Math.min(24, Math.round(12 / ratio)));

    setLtv(calculatedLTV);
    setCac(calculatedCAC);
    setLtvCacRatio(ratio);
    setMonthsToProfitability(months);
  }, [monthlyPrice, adSpend, conversionRate]);

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Content Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">The Financier</h1>
            <p className="text-md text-neutral-400 mt-1">Financial modeling for: AI eLearning Captioning Tool</p>
          </div>
          <Button variant="outline">
            <UploadCloud className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* AI-Recommended Pricing Tiers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-red-500" />
              AI-Recommended Pricing Model
            </CardTitle>
            <CardDescription>
              Based on competitive analysis and market positioning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1: Freemium */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Acquisition</h3>
                  <p className="text-sm text-neutral-500">The "Hook"</p>
                </div>
                <div className="py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">Free</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">1 Free Analysis</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    1 venture analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Basic market insights
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    No credit card required
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </div>

              {/* Tier 2: Pro - RECOMMENDED */}
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/10 border-2 border-red-500 rounded-xl p-6 space-y-4 relative">
                <Badge variant="destructive" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  RECOMMENDED
                </Badge>
                <div>
                  <h3 className="text-lg font-bold text-white">Profit</h3>
                  <p className="text-sm text-neutral-400">The "Builder"</p>
                </div>
                <div className="py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">€19</span>
                    <span className="text-neutral-500">/mo</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">Unlimited Analyses</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 text-green-400" />
                    Unlimited analyses
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 text-green-400" />
                    All 4 AI agents
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 text-green-400" />
                    Export reports (PDF)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 text-green-400" />
                    Priority support
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Start Building
                </Button>
              </div>

              {/* Tier 3: Enterprise */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Scale</h3>
                  <p className="text-sm text-neutral-500">The "Enterprise"</p>
                </div>
                <div className="py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">API Access & Teams</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Everything in Pro
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    API access
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Team collaboration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Dedicated support
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Profit Engine - Interactive Calculator */}
        <Card className="border-green-500/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calculator className="w-6 h-6 text-green-500" />
              The Profit Engine: Your 5-Year Projection
            </CardTitle>
            <CardDescription>
              Adjust the levers below to see real-time business metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Column 1: The "Levers" */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Adjust Your Levers
                </h3>

                {/* Slider 1: Monthly Price */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Monthly Price</label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white">€{monthlyPrice}</span>
                      <span className="text-sm text-neutral-500">/mo</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="9"
                    max="99"
                    step="1"
                    value={monthlyPrice}
                    onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>€9</span>
                    <span>€99</span>
                  </div>
                </div>

                {/* Slider 2: Ad Spend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Est. Monthly Ad Spend</label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white">€{adSpend}</span>
                      <span className="text-sm text-neutral-500">/mo</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>€100</span>
                    <span>€5,000</span>
                  </div>
                </div>

                {/* Slider 3: Conversion Rate */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-white">Est. Conversion Rate</label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white">{conversionRate}%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>0.5%</span>
                    <span>10%</span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 mt-6">
                  <p className="text-xs text-neutral-500 mb-2">
                    <strong className="text-white">How it works:</strong>
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    The Profit Engine calculates your Customer Acquisition Cost (CAC) based on ad spend and conversion rate,
                    then compares it to Lifetime Value (LTV) to determine business viability. A healthy LTV:CAC ratio is 3:1 or higher.
                  </p>
                </div>
              </div>

              {/* Column 2: The "Results" */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Key Business Metrics (Real-time)
                </h3>

                {/* LTV:CAC Ratio - Large Display */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-2 border-green-500/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-neutral-400 mb-2">LTV:CAC Ratio</p>
                  <div className="text-6xl font-bold text-green-400 mb-2">
                    {ltvCacRatio.toFixed(1)}:1
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {ltvCacRatio >= 3 && (
                      <Badge variant="success" className="text-xs">
                        Excellent
                      </Badge>
                    )}
                    {ltvCacRatio >= 2 && ltvCacRatio < 3 && (
                      <Badge variant="warning" className="text-xs">
                        Good
                      </Badge>
                    )}
                    {ltvCacRatio < 2 && (
                      <Badge variant="danger" className="text-xs">
                        Poor
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Other Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* CAC */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                    <p className="text-xs text-neutral-500 mb-2">Est. CAC</p>
                    <p className="text-3xl font-bold text-white">€{cac.toFixed(0)}</p>
                    <p className="text-xs text-neutral-500 mt-1">Cost per customer</p>
                  </div>

                  {/* LTV */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                    <p className="text-xs text-neutral-500 mb-2">Est. LTV</p>
                    <p className="text-3xl font-bold text-white">€{ltv.toFixed(0)}</p>
                    <p className="text-xs text-neutral-500 mt-1">Lifetime value</p>
                  </div>

                  {/* Months to Profitability */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center col-span-2">
                    <p className="text-xs text-neutral-500 mb-2">Months to Profitability</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <p className="text-3xl font-bold text-white">{monthsToProfitability}</p>
                      <span className="text-neutral-500">months</span>
                    </div>
                  </div>
                </div>

                {/* 5-Year Revenue Projection */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                  <p className="text-sm font-semibold text-white mb-3">5-Year Revenue Projection</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">Year 1</span>
                      <span className="text-white font-medium">€{(monthlyPrice * 50 * 12).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">Year 2</span>
                      <span className="text-white font-medium">€{(monthlyPrice * 150 * 12).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">Year 3</span>
                      <span className="text-white font-medium">€{(monthlyPrice * 350 * 12).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">Year 4</span>
                      <span className="text-white font-medium">€{(monthlyPrice * 700 * 12).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm border-t border-neutral-800 pt-2">
                      <span className="text-white font-semibold">Year 5</span>
                      <span className="text-green-400 font-bold">€{(monthlyPrice * 1200 * 12).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Financier's Verdyct */}
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-500" />
              The Financier's Verdyct: Your Business
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-white/90 leading-relaxed text-lg">
                {ltvCacRatio >= 3 ? (
                  <>
                    The LTV:CAC ratio of <strong className="text-green-400">{ltvCacRatio.toFixed(1)}:1</strong> is{' '}
                    {ltvCacRatio >= 10 ? 'exceptionally' : 'very'} strong.
                    At a monthly price of <strong className="text-green-400">€{monthlyPrice}</strong> with an estimated CAC of{' '}
                    <strong className="text-green-400">€{cac.toFixed(0)}</strong>, this business model is highly viable and scalable.
                    You could reach profitability in approximately <strong className="text-green-400">{monthsToProfitability} months</strong>.
                  </>
                ) : ltvCacRatio >= 2 ? (
                  <>
                    The LTV:CAC ratio of <strong className="text-yellow-400">{ltvCacRatio.toFixed(1)}:1</strong> is acceptable but could be improved.
                    Consider adjusting your pricing or reducing customer acquisition costs to reach the ideal 3:1 ratio.
                  </>
                ) : (
                  <>
                    The LTV:CAC ratio of <strong className="text-red-400">{ltvCacRatio.toFixed(1)}:1</strong> indicates challenges with unit economics.
                    You should either increase pricing, reduce ad spend, or improve conversion rates before scaling.
                  </>
                )}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-1 bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center">
                  <p className="text-5xl font-bold text-green-400">
                    {ltvCacRatio >= 10 ? '10/10' : ltvCacRatio >= 5 ? '9/10' : ltvCacRatio >= 3 ? '8/10' : ltvCacRatio >= 2 ? '6/10' : '4/10'}
                  </p>
                  <p className="text-sm text-neutral-400 mt-2">Business Model Score</p>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Unit Economics</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${Math.min(100, (ltvCacRatio / 10) * 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-green-400 w-12 text-right">{Math.min(10, ltvCacRatio).toFixed(1)}/10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Scalability</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${ltvCacRatio >= 3 ? '90%' : '50%'}` }}
                        ></div>
                      </div>
                      <span className="text-green-400 w-12 text-right">{ltvCacRatio >= 3 ? '9/10' : '5/10'}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Time to Profit</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${Math.max(20, 100 - monthsToProfitability * 4)}%` }}
                        ></div>
                      </div>
                      <span className="text-green-400 w-12 text-right">
                        {Math.max(2, Math.round(10 - monthsToProfitability / 3))}/10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <p className="text-sm text-white/70">
                  <strong className="text-white">The Financier's Recommendation:</strong>{' '}
                  {ltvCacRatio >= 3
                    ? 'This is an excellent business model. Proceed with confidence and focus on scaling customer acquisition.'
                    : 'Optimize your unit economics before scaling. Focus on improving conversion rates or reducing CAC.'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
