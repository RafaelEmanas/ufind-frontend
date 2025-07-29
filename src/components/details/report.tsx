import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FullReportCardProps {
    report: string;
}

export const FullReportCard = ({ report }: FullReportCardProps) => {
    return (
        <Card className="mt-8 border-border">
            <CardHeader>
                <CardTitle>Relatório completo</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                    {report}
                </p>
            </CardContent>
        </Card>
    );
};