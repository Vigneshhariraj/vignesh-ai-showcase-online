
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, ExternalLink, Heart, MessageCircle, Share } from 'lucide-react';

// Note: LinkedIn API requires OAuth and special permissions
// For now, using placeholder structure that can be connected to a proxy API
interface LinkedInPost {
  id: string;
  content: string;
  publishedAt: string;
  likes: number;
  comments: number;
  shares: number;
  url: string;
}

const mockLinkedInPosts: LinkedInPost[] = [
  {
    id: '1',
    content: 'Excited to share my latest AI project! Built a machine learning model that achieved 95% accuracy in predicting customer behavior. The journey from data preprocessing to model deployment taught me so much about the power of data science. #AI #MachineLearning #DataScience',
    publishedAt: '2024-01-15',
    likes: 42,
    comments: 8,
    shares: 15,
    url: 'https://linkedin.com/in/vigneshhariraj'
  },
  {
    id: '2',
    content: 'Just completed my Intel OneAPI hackathon project! Secured 12th position among hundreds of participants. The experience of optimizing ML algorithms with Intel\'s tools was incredible. Grateful for this learning opportunity! #IntelOneAPI #Hackathon #Innovation',
    publishedAt: '2024-01-10',
    likes: 67,
    comments: 12,
    shares: 23,
    url: 'https://linkedin.com/in/vigneshhariraj'
  },
  {
    id: '3',
    content: 'Thrilled to announce that our AI research paper implementation won 3rd place in the competition! Working on cutting-edge algorithms and seeing them come to life is what drives my passion for artificial intelligence. #Research #AI #Achievement',
    publishedAt: '2024-01-05',
    likes: 89,
    comments: 18,
    shares: 31,
    url: 'https://linkedin.com/in/vigneshhariraj'
  }
];

export function LinkedInPosts() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LinkedIn <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Latest updates and insights from my professional journey in AI and Data Science.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {mockLinkedInPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Vignesh Hariraj</CardTitle>
                        <p className="text-sm text-muted-foreground">Aspiring Data & ML Engineer</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {formatDate(post.publishedAt)}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share className="w-4 h-4" />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(post.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.linkedin.com/in/vigneshhariraj', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            View All Posts on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
