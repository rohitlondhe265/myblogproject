"use client";

import { ShareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { toast } from "react-toastify";

const SocialShare = ({ url, title }) => {
  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      title
    )}%20${encodeURIComponent(url)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, "_blank", "width=600,height=300");
  };

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(linkedinUrl, "_blank", "width=600,height=400");
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Post URL copied to clipboard");
  };
  return (
    <div className="flex flex-wrap space-x-3 md:space-x-6 my-3 md:my-6 ">
      <button onClick={shareOnWhatsApp}>
        <Image src="/whatsapp.png" alt="whatsapp icon" height={30} width={30} />
      </button>
      <button onClick={shareOnFacebook}>
        <Image src="/facebook.png" alt="Facebook icon" height={30} width={30} />
      </button>
      <button onClick={shareOnTwitter}>
        <Image src="/twitter.png" alt="Twitter icon" height={30} width={30} />
      </button>
      <button onClick={shareOnLinkedIn}>
        <Image src="/linkedin.png" alt="LinkedIn icon" height={30} width={30} />
      </button>
      <button onClick={handleCopyLink}>
        <Image src="/share.png" alt="whatsapp icon" height={30} width={30} />
      </button>
    </div>
  );
};

export default SocialShare;
