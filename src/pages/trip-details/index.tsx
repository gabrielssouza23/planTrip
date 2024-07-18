import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { Guests } from "./guests";
import { ImportantLinks } from "./important-links";
import { Activities } from "./activities";
import { DestinationAndDateStep } from "./destinationAndDateHeader";

export function TripDetailsPage() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true);
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
           
           <DestinationAndDateStep />

            <main className="flex gap-16 px-4">
             <Activities openCreateActivityModal={openCreateActivityModal}/>
                <div className="w-80 space-y-8">
              

                    <ImportantLinks />

                    <div className="w-full h-px bg-zinc-800" />

                    <Guests />
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
            )}
        </div>
    )
}