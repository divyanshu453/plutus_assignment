  'use client';

  import { useState, useEffect, useMemo } from 'react';
  import Link from 'next/link';
  import styles from './users.module.css';
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

  interface Article {
    article_id: string;
    title: string;
    description: string;
    link: string;
    image_url: string | null;
    pubDate: string;
    source_name: string;
    category: string[];
    country: string[];
  }

  export default function UsersPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      const fetchArticles = async () => {
        try {
          setLoading(true);
          const res = await fetch(
            'https://newsdata.io/api/1/latest?apikey=pub_1586e3c670e44ca09344f4e76a3d2baa&q=crypto'
          );
          if (!res.ok) throw new Error('Failed to fetch articles');
          const data = await res.json();
          setArticles(data.results || []);
          setError(null);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred');
          setArticles([]);
        } finally {
          setLoading(false);
        }
      };

      fetchArticles();
    }, []);

    const filteredArticles = useMemo(() => {
      return articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.source_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [articles, searchTerm]);

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    };

    return (
      <>
        <Header />
        <main className={styles.container}>
          <div className={styles.header}>
            <h1>Crypto News</h1>
            <p>Latest cryptocurrency news and updates from around the world</p>
          </div>

          <div className={styles.controls}>
            <input
              type="text"
              placeholder="Search by title, description, or source..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              aria-label="Search articles"
            />
          </div>

          {loading && (
            <div className={styles.state} role="status" aria-live="polite">
              <div className={styles.spinner}></div>
              <p>Loading articles...</p>
            </div>
          )}

          {error && (
            <div className={styles.state} role="alert">
              <p className={styles.error}>❌ {error}</p>
            </div>
          )}

          {!loading && !error && filteredArticles.length === 0 && (
            <div className={styles.state}>
              <p>No articles found. Try adjusting your search.</p>
            </div>
          )}

          {!loading && !error && filteredArticles.length > 0 && (
            <>
              <p className={styles.resultCount}>
                Showing {filteredArticles.length} of {articles.length} articles
              </p>
              <div className={styles.grid}>
                {filteredArticles.map((article) => (
                  <div key={article.article_id} className={styles.card}>
                    {article.image_url && (
                      <div className={styles.imageContainer}>
                        <img
                          src={article.image_url}
                          alt={article.title}
                          className={styles.image}
                        />
                      </div>
                    )}
                    <div className={styles.content}>
                      <h2>{article.title}</h2>
                      <p className={styles.description}>{article.description}</p>
                      <div className={styles.meta}>
                        <span className={styles.source}>{article.source_name}</span>
                        <span className={styles.date}>
                          {formatDate(article.pubDate)}
                        </span>
                      </div>
                      {article.category && article.category.length > 0 && (
                        <div className={styles.tags}>
                          {article.category.map((cat, i) => (
                            <span key={i} className={styles.tag}>
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.readMore}
                      >
                        Read Full Article →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }
