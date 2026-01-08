import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";

interface Reel {
  id: string;
  wistia_id: string;
}

const Moments = () => {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReels = async () => {
      const { data, error } = await supabase
        .from("reels")
        .select("id, wistia_id")
        .eq("is_active", true);

      if (error) {
        console.error("Error fetching reels:", error);
        return;
      }

      // Shuffle the reels array
      const shuffled = [...(data || [])].sort(() => Math.random() - 0.5);
      setReels(shuffled);
      setLoading(false);
    };

    fetchReels();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Moments | Neural Ads</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold tracking-widest text-foreground uppercase">
              Moments
            </h1>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Content */}
        <main className="pt-24 pb-16 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {reels.map((reel) => (
                  <div
                    key={reel.id}
                    className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-3"
                  >
                    {/* Video Container - 9:16 aspect ratio for reels */}
                    <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden">
                      <WistiaPlayer
                        mediaId={reel.wistia_id}
                        playerColor="#ffffff"
                        doNotTrack={true}
                        endVideoBehavior="loop"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Moments;
