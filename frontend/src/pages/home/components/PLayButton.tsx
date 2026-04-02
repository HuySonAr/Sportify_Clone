import { Button } from '@/components/ui/button';
import { usePlayerStore } from '@/stores/usePlayerStore';
import type { Song } from '@/types';
import { Pause, Play } from 'lucide-react';
import React from 'react';

const PLayButton = ({ song }: { song: Song }) => {
  const { currentSong, isPlaying, setCurrentSong, togglePlay } =
    usePlayerStore();
  const handlePLay = () => {
    if (isCurrentSong) togglePlay();
    else setCurrentSong(song);
  };
  const isCurrentSong = currentSong?._id === song._id;
  return (
    <Button
      size={'icon'}
      onClick={handlePLay}
      className={`absolute bottom-3 right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all opacity-0 translate-y-2 group-hover:translate-y-0 ${isCurrentSong ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
    >
      {isCurrentSong && isPlaying ? (
        <Pause className="size-5 text-black" />
      ) : (
        <Play className="size-5 text-black" />
      )}
    </Button>
  );
};

export default PLayButton;
