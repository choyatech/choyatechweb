import Marquee from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reviews = [
  {
    title: "Innovating the Future",
    author: "Juan Pérez",
    date: "07-24-2024",
    summary:
      "Discover the latest trends in software development and how they are transforming the technological landscape.",
    imageUrl: "",
    isNew: false,
  },
  {
    title: "Transforming Ideas into Reality",
    author: "María López",
    date: "07-20-2024",
    summary:
      "Explore success stories where ideas become effective technological solutions.",
    imageUrl: "",
    isNew: false,
  },
  {
    title: "Revolutionizing Technology",
    author: "Carlos García",
    date: "07-18-2024",
    summary:
      "Learn about the latest innovations in the tech sector and their impact on various industries.",
    imageUrl: "",
    isNew: false,
  },
  {
    title: "Developing Tomorrow",
    author: "Ana Martínez",
    date: "07-15-2024",
    summary:
      "Learn about futuristic projects that are changing the way we live and work.",
    imageUrl: "",
    isNew: true,
  },
];

const Blog = () => {
  return (
    <main className="min-h-[calc(100vh-22rem)]" id="blog">
      <div className="container text-center py-12">
        <h3 className="text-3xl font-extrabold text-neutral-800">
          Stay informed with us
        </h3>
        <hr className="w-24 h-2 mx-auto my-2 bg-blue-500 border-0 dark:bg-blue-300" />
      </div>
      <div className="container">
        <Marquee className="mt-8">
          {reviews.map((rev, index) => (
            <Card
              className="flex flex-col items-start text-start max-w-[24rem] rounded-3xl"
              key={index}
            >
              <CardHeader className="">
                <div className="h-8">
                  {rev.isNew && <Badge variant="outline">New</Badge>}
                </div>
                <CardTitle>{rev.title}</CardTitle>
                <CardDescription>
                  {rev.author} - {rev.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-neutral-500">{rev.summary}</p>
                <div className="mt-auto">
                  <Button variant="link" className="px-0">
                    Read more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </main>
  );
};

export default Blog;
