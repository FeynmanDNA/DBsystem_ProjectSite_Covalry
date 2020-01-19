import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Automatic Bug Finding</>,
    imageUrl: 'img/undraw_bug_fixing_oc7a.svg',
    description: (
      <>
        Covalry is a static analysis tool that can automatically
        find security bugs and vulnerabilities in program
        written in both general-purpose programming languages
        or domain-specific languages
      </>
    ),
  },
  {
    title: <>Analyze Vulnerabilities</>,
    imageUrl: 'img/undraw_project_completed_w0oq.svg',
    description: (
      <>
        Covalry is developed using the OCaml programming language.
        It has a compiler front-end, and an analyzer back-end that
        performs suitable analysis technique to detect 
        each kind of bug and vulnerability.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`DBsystem - ${siteConfig.title}`}
      description="Project Covalry, a static analysis tool by NUS DBsystem">
      <header className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
