import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button external href={siteConfig.links.linkedin} icon={Linkedin} variant="secondary">
        LinkedIn
      </Button>
      <Button external href={siteConfig.links.github} icon={Github} variant="secondary">
        GitHub
      </Button>
      <Button href={siteConfig.links.email} icon={Mail}>
        Email
      </Button>
    </div>
  );
}
