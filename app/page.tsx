import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Button>default button</Button>
      <Button variant={"outline"}>
        <Camera />
      </Button>
    </div>
  );
}
