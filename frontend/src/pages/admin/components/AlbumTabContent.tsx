import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Library } from 'lucide-react';
import React from 'react';
import AddAlbumDialog from './AddAlbumDialog';
import AlbumTable from './AlbumTable';

const AlbumTabContent = () => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="">
            <CardTitle className="flex items-center gap-2">
              <Library className="h-5 w-5 text-violet-500" />
              ALbums Library
            </CardTitle>
            <CardDescription>Manage your album colection</CardDescription>
          </div>
          <AddAlbumDialog />
        </div>
      </CardHeader>

      <CardContent>
        <AlbumTable />
      </CardContent>
    </Card>
  );
};

export default AlbumTabContent;
