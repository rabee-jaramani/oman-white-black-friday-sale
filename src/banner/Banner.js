import React, { useEffect, useState } from 'react';
import banner_wide from './banner_wide.jpg';
import mobile_mobile from './banner_mobile.jpg';
export default function Banner() {
  const [bg, setBg] = useState();

  useEffect(() => {
    if (window.innerWidth < 800) {
      setBg(mobile_mobile);
    } else {
      setBg(banner_wide);
    }
  }, []);
  return (
    <div
      className="container banner"
      onClick={() => window.open('https://clubapparel.com/', '_blank')}
    >
      <img src={bg} alt="bannerImage" />
    </div>
  );
}
