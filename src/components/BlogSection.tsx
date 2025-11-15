import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "5 Reasons Your Local Business Needs a Website in 2025",
    excerpt:
      "Discover why having an online presence is no longer optional for local businesses in today's digital-first world.",
    date: "January 15, 2025",
    category: "Business Growth",
    readTime: "5 min read",
  },
  {
    title: "Why Salon Owners in Navi Mumbai Are Going Online",
    excerpt:
      "Learn how beauty salons are leveraging online booking systems to increase revenue and customer satisfaction.",
    date: "January 10, 2025",
    category: "Industry Insights",
    readTime: "4 min read",
  },
  {
    title: "SEO Basics for Small Business Owners",
    excerpt:
      "A beginner-friendly guide to understanding SEO and how it can help your business appear in local searches.",
    date: "January 5, 2025",
    category: "SEO Tips",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 sm:py-20 md:py-22 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Tips, strategies, and industry knowledge to help your business thrive online
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-glow cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              <Button
                variant="ghost"
                className="w-full mt-4 group-hover:text-primary"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
