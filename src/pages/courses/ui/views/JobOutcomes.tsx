import { Card, CardContent} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Outcomes = {
  title: string;
  roleTitle: string;
  roleDescription: string;
  roles: string[];
  companyTitle: string;
  companyDescription: string;
  companies: Array<{
    name: string;
    alumni: Array<{
      name: string;
      photo: string;
    }>;
  }>;
};

export default function JobOutcomes({ content }: { content: Outcomes }) {
    return (
        <div className="relative pt-6">
            <div className="absolute top-0 left-0 right-0 z-10">
                <div className="shadow-sm rounded-full px-6 py-6" style={{ backgroundColor: '#FAFAFA' }}>
                    <h3 className="text-2xl md:text-[28px] font-outfit">{content.title}</h3>
                </div>
            </div>

            <Card className="shadow-lg pt-12 font-roboto" style={{ borderRadius: '2rem', backgroundColor: '#FAFAFA' }}>
                <div className="flex flex-col md:flex-row">
                    <CardContent className="px-6 md:px-8 py-10 flex-1">
                        <p className="mb-4 text-sm md:text-lg">{content.roleTitle}</p>
                        <p className="mb-4 text-sm md:text-lg">{content.roleDescription}</p>
                        <ul className="list-disc space-y-1 text-sm md:text-lg [&>li::marker]:text-xs px-6">
                            {content.roles.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardContent className="px-6 md:px-8 py-10 flex-1">
                        <p className="mb-4 text-sm md:text-lg">{content.companyTitle}</p>
                        <p className="mb-4 text-sm md:text-lg">{content.companyDescription}</p>

                        <div className="grid grid-cols-2 gap-x-0 gap-y-6">
                            {content.companies.map((company, index) => (
                                <div key={index}>
                                    <h4 className="text-lg md:text-xl font-bold mb-3">{company.name}</h4>
                                    <div className='flex flex-wrap gap-2'>
                                        {company.alumni.map((person, personIndex) => (
                                            <Avatar key={personIndex} className="w-10 h-10">
                                                <AvatarImage src={person.photo} alt={person.name} />
                                                <AvatarFallback className="text-xs">
                                                    {person.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}