import React from 'react';

const FooterSocialIcon = ({ item }) => {
  return (
    <a
      key={item.id}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
    >
      <img src={item.iconUrl} width={16} height={16} alt={item.title} />
    </a>
  );
};

export default FooterSocialIcon;