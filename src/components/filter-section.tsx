"use client"

import { useState } from "react";
import { Calendar, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const FilterSection = () => {
	const [dateFrom, setDateFrom] = useState<Date>();
	const [dateTo, setDateTo] = useState<Date>();
	const [location, setLocation] = useState("");
	const [includeClaimed, setIncludeClaimed] = useState(false);



	return (
		<section>
			<div className="py-6 px-4">
				<div className="flex items-center gap-2 mb-4">
					<Filter className="h-5 w-5 text-primary" />
					<h3 className="text-lg font-semibold">Filtrar Itens</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* Date From */}
					<div className="space-y-2">
						<Label htmlFor="date-from">Data Inicial</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									className={cn(
										"h-11 md:h-auto w-full justify-start text-left font-normal",
										!dateFrom && ""
									)}
								>
									<Calendar className="mr-2 h-4 w-4" />
									{dateFrom ? format(dateFrom, "PPP") : "Selecionar data"}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-full p-0" align="start">
								<CalendarComponent
									mode="single"
									selected={dateFrom}
									onSelect={setDateFrom}
									className="p-3 pointer-events-auto w-full"
								/>
							</PopoverContent>
						</Popover>
					</div>

					{/* Date To */}
					<div className="space-y-2">
						<Label htmlFor="date-to">Data Final</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									className={cn(
										"h-11 md:h-auto w-full justify-start text-left font-normal",
										!dateTo && "text-muted"
									)}
								>
									<Calendar className="mr-2 h-4 w-4" />
									{dateTo ? format(dateTo, "PPP") : "Selecionar data"}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<CalendarComponent
									mode="single"
									selected={dateTo}
									onSelect={setDateTo}
									autoFocus
									className="p-3 pointer-events-auto"
								/>
							</PopoverContent>
						</Popover>
					</div>

					{/* Location */}
					<div className="space-y-2">
						<Label htmlFor="location">Local</Label>
						<div className="relative">
							<MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								id="location"
								placeholder="ex: Icomp, CDC, etc"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
								className="h-11 md:h-9 pl-10"
							/>
						</div>
					</div>
				</div>

				{/* Include Claimed Items Checkbox */}
				<div className="flex items-center space-x-2 mt-4">
					<Checkbox
						id="include-claimed"
						checked={includeClaimed}
						onCheckedChange={(checked) => setIncludeClaimed(checked === true)}
					/>
					<Label htmlFor="include-claimed" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						Incluir itens devolvidos
					</Label>
				</div>

				<div className="flex gap-2 mt-4">
					<Button size={"lg"} variant="default" className="flex-1 md:flex-none">
						Aplicar Filtros
					</Button>
				</div>
			</div>
		</section>
	);
};

export default FilterSection;