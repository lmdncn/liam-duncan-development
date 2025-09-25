import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { BlogCardProps } from '@/types';

const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <Card 
      className="shadow-card bg-gradient-card border-border/50 animate-fade-in cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-[1.02]"
      onClick={handleClick}
    >
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-foreground">
              {post.title}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              )}
            </div>
          </div>
          <Badge className="bg-accent/20 text-accent border-accent/30 flex items-center gap-1">
            {post.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-foreground leading-relaxed">
          {post.excerpt}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;