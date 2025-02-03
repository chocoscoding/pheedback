import { Code, Copy } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CopyBtn from "@/components/copy-btn";

export function DialogCloseButton() {
  const projectKey = "11111";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border p-1 rounded-md flex items-center justify-center text-neutral-900 bg-neutral-100">
          <Code className="h-5 w-5 mr-1" />
          <span className="text-lg">Embed Code</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start Collecting Feedback</DialogTitle>
          <DialogDescription>Copy and paste this code into your site.</DialogDescription>
        </DialogHeader>
        <div className="bg-neutral-950 p-6 rounded-md mt-2 relative">
          <code className=" text-white">
            {`<pheedbac-widget project-id="${projectKey}"></pheedbac-widget>`}
            <br />
            {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
          </code>
          <CopyBtn
            text={`<pheedbac-widget project-id="${projectKey}"></pheedbac-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
