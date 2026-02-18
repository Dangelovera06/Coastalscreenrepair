import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
  dark = false,
  className,
  onActionClick,
}) {
  return (
    <section
      className={cn(
        dark ? "bg-transparent text-white" : "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge 
              variant="outline" 
              className={cn(
                "animate-appear gap-2",
                dark && "border-rose-500/30 bg-rose-500/10"
              )}
            >
              <span className={dark ? "text-rose-400" : "text-muted-foreground"}>{badge.text}</span>
              {badge.action && (
                <a href={badge.action.href} className={cn("flex items-center gap-1", dark ? "text-rose-500" : "text-brand")}>
                  {badge.action.text}
                  <ArrowRightIcon className="h-3 w-3" />
                </a>
              )}
            </Badge>
          )}

          {/* Title */}
          <h1 className={cn(
            "relative z-10 inline-block animate-appear text-4xl font-black leading-tight drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight",
            dark 
              ? "bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent" 
              : "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
          )}>
            {title}
          </h1>

          {/* Description */}
          <p className={cn(
            "text-md relative z-10 max-w-[550px] animate-appear font-medium opacity-0 delay-100 sm:text-xl",
            dark ? "text-white/50" : "text-muted-foreground"
          )}>
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            {actions.map((action, index) => (
              <Button 
                key={index} 
                variant={action.variant} 
                size="lg" 
                asChild={!action.onClick}
                onClick={action.onClick || onActionClick}
                className={cn(
                  action.variant === "glow" && dark && "bg-rose-500 hover:bg-rose-600 shadow-rose-500/30"
                )}
              >
                {action.onClick ? (
                  <span className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </span>
                ) : (
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                )}
              </Button>
            ))}
          </div>

          {/* Image with Glow */}
          {image && (
            <div className="relative pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup type="responsive">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                    loading="eager"
                  />
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
