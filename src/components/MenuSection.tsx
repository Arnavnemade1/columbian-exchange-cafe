import { Card } from "@/components/ui/card";

interface MenuSectionProps {
  title: string;
  items: {
    name: string;
    description?: string;
    newWorld: string;
    oldWorld: string;
  }[];
}

export const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center border-b-2 border-accent pb-2">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-sm text-muted-foreground italic mb-3">
                {item.description}
              </p>
            )}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-newWorld min-w-24">New World:</span>
                <span className="text-foreground">{item.newWorld}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-oldWorld min-w-24">Old World:</span>
                <span className="text-foreground">{item.oldWorld}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
