import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <div className='flex flex-col gap-6 px-20 text-2xl bg-black  text-white py-10'>
      <div className='flex flex-wrap  justify-between' >
        <div className='flex flex-col gap-6 py-20'>
            <span><a href="http://">Company</a></span>
            <span><a href="http://">Sustainability</a></span>
            <span><a href="http://"></a>Cookie settings</span>
        </div>
        <div className='flex flex-col gap-6 py-20'>
            <span><a href="http://">Financials</a></span>
            <span><a href="http://">Media Center</a></span>
            <span><a href="http://"></a>Sitemap</span>
        </div>
        <div className='flex flex-col gap-6 py-20'>
            <span><a href="http://">Careers</a></span>
            <span><a href="http://">Recall Campaign</a></span>
            <span><a href="http://"></a>Privacy & Legal</span>
        </div>
        <div className='flex flex-col gap-6 py-20'>
            <span><a href="http://">Newsletter</a></span>
            <span><a href="http://">Contact us</a></span>
            <span><a href="http://"></a>Accessibility</span>
        </div>
        <div className='py-20 flex flex-col gap-6 '>
            <h1>Follow us on:</h1>
            <div class="flex flex-col gap-6">
                <div className='flex gap-6 text-xl'>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-threads"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-youtube"></i></a>
                    <a href="#"><i class="bi bi-twitter-x"></i></a>
                </div>
                <div className='flex gap-6 text-xl'>
                    <a href="#"><i class="bi bi-tiktok"></i></a>
                    <a href="#"><i class="bi bi-chat-dots"></i></a>
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-wechat"></i></a>
                    <a href="#"><i class="bi bi-play-circle"></i></a>
                </div>
                <div className='flex gap-6 text-xl'>
                    
                    
                    <a href="#"><i class="bi bi-chat-dots-fill"></i></a>
                    <a href="#"><i class="bi bi-discord"></i></a>
                    </div>
            </div>
        </div>
            
      </div>

      <div className='py-20 border-t border-b border-white'>
        <p>
            The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.
        </p>
      </div>

      <div className='py-20 flex flex-col gap-6 font-thin'>
        <span className='inline-block'>
            This site is protected by reCAPTCHA and the Privacy Policy and Terms of Service of Google apply.
        </span>
        <span className='inline-block'>
            Copyright © 2026 Automobili Lamborghini S.p.A. a company with sole shareholder subject to the management and coordination of AUDI AG. All rights reserved. VAT no. IT 00591801204
        </span>
        <span className='inline-block'>
            WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.
            Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These offers are unlawful and originate neither from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.
        </span>
        
      </div>

      <div className='flex items-center justify-center'>
        <div>
            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg" alt="" srcset="" />
        </div>
      </div>

    </div>
  )
}

export default Footer
