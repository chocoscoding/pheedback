import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Intelligent analysis and report <br />
            <span className="font-subheading italic">dashboard</span>
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
            Gain detailed insights into your users response and make better business decisions.
          </p>
        </div>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">
        <Container delay={0.2}>
          <div className="rounded-2xl bg-background/40 relative border border-border/50">
            <MagicCard
              gradientFrom="#38bdf8"
              gradientTo="#3b82f6"
              gradientColor="rgba(59,130,246,0.1)"
              className="p-4 lg:p-8 w-full overflow-hidden">
              <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold w-full flex justify-between">
                  New Upload Page <i className="opacity-50">Insights</i>
                </h3>
                <p className="text-sm text-muted-foreground">Track your feedback performance on one campaign or more.</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-3xl font-semibold">2,834</div>
                      <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                        <TrendingUpIcon className="w-4 h-4" />
                        +25% from last month
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <FilterIcon className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <DownloadIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                      <div>Campaign</div>
                      <div>Status</div>
                      <div>Reach</div>
                      <div>Avg Rating</div>
                    </div>
                    {[
                      { name: "New Sign In", status: "Active", reach: "45K", roi: "3.5" },
                      { name: "Ads", status: "Active", reach: "62K", roi: "4" },
                      { name: "New Dashboard", status: "Inactive", reach: "28K", roi: "4.5" },
                    ].map((campaign) => (
                      <div key={campaign.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                        <div>{campaign.name}</div>
                        <div>{campaign.status}</div>
                        <div>{campaign.reach}</div>
                        <div className="font-semibold">{campaign.roi}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
        </Container>

        <Container delay={0.2}>
          <div className="rounded-2xl bg-background/40 relative border border-border/50">
            <MagicCard
              gradientFrom="#38bdf8"
              gradientTo="#3b82f6"
              gradientColor="rgba(59,130,246,0.1)"
              className="p-4 lg:p-8 w-full overflow-hidden">
              <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Audience Metrics</h3>
                <p className="text-sm text-muted-foreground">Understand your audience behavior and engagement patterns.</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-3xl font-semibold">84,392</div>
                      <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                        <TrendingUpIcon className="w-4 h-4" />
                        +12% engagement rate
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <FilterIcon className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <DownloadIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Audience Table */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                      <div>Regions</div>
                      <div>Open Rate</div>
                      <div>Completion Rate</div>
                      <div>Avg. Rating</div>
                    </div>
                    {[
                      { channel: "AFRICA", users: "62%", sessions: "57%", rate: "4.5" },
                      { channel: "ASIA", users: "57.5%", sessions: "49%", rate: "4" },
                      { channel: "North-America", users: "68%", sessions: "60%", rate: "4" },
                    ].map((metric) => (
                      <div key={metric.channel} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                        <div>{metric.channel}</div>
                        <div>{metric.users}</div>
                        <div>{metric.sessions}</div>
                        <div className="font-semibold">{metric.rate}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Analysis;
