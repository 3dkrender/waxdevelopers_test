import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'User Friendly',
    img: '/img/wax_293x292.png',
    description: (
      <>
        WAX Blockchain prioritizes a user-friendly design, making it easy for both beginners and experienced users to navigate and engage with the platform.
      </>
    ),
  },
  {
    title: 'Scalability and Performance',
    img: '/img/wax_293x292.png',
    description: (
      <>
        With its delegated proof-of-stake (DPoS) consensus mechanism, WAX Blockchain offers fast block confirmation times and high transaction throughput, ensuring efficient operations even during high-demand periods.
      </>
    ),
  },
  {
    title: 'Token Standardization',
    img: '/img/wax_293x292.png',
    description: (
      <>
        WAX Blockchain implements a standardized token structure, allowing developers to create and manage their own fungible and non-fungible tokens (NFTs) easily. This standardization promotes interoperability and compatibility between different applications and platforms.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img className={styles.featureImg} src={useBaseUrl(img)} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
