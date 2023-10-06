// Import Assets
import uniswap from '../assets/mqdefault1.webp';
import compound from '../assets/mqdefault2.webp';
import aave from '../assets/mqdefault3.webp';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Videos</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>JSW Infrastructure Limited | IPO Summary | CA Rachana Ranade</h3>
                    <img src={uniswap} alt="youtube video" />
                    <p>🔴Disclaimer: 
02:09 - As per the company's RHP there is no mention of airport/ railway connectivity for ports/ terminals managed by JSW Infrastructure Ltd. We have mentioned these alternatives only for explanation purpose.  

✔️ Invest in Knowledge: https://social.rachanaranade.com/Courses 
✔️ All Social Media Handles: https://linktr.ee/RachanaRanade
---------------------------
Secure your life and health
✔️Policy Bazaar:
-  Life Insurance► https://bit.ly/3tYenqr
-  Health Insurance►https://bit.ly/3ynVssD
✔️Ditto► Book a free consultation call with Ditto Insurance now:  https://bit.ly/3xuAcBS
_______________
Short-term investing options, 'Invoice Discounting' with the help of the TradeCred Platform :
✔️ TradeCred: https://buy.tradecred.com/onboarding/....

What is covered? 
00:00 – What does the company do?
02:59 – Understanding the Business model 
06:02 – Understanding revenue breakup 
08:50 – Promoter related Information
09:38 – Industry Analysis
11:35 – Understanding the financials of the company
13:14 – Key Risks of the company
19:21 – IPO Details

JSW Infrastructure Limited IPO RHP - 
https://www.sebi.gov.in/filings/publi...

#carachanaranade #sharemarket #ipo</p>
                    <a href="https://www.youtube.com/watch?v=vkwEoFLzHsY" target="_blank" className="button">Watch</a>
                </div>

                <div className="projects__card">
                    <h3>Whose Economy is Better? China vs. Bharat | CA Rachana Ranade</h3>
                    <img src={compound} alt="Youtube Video" />
                    <p>China vs. India - April to June 2023 Stats Comparison

Welcome to our in-depth analysis of the economic performance of two global giants, China and India. In this video, we dissect key statistical indicators to provide you with valuable insights into the economic dynamics of these nations.

Whether you're an economist, investor, or simply curious about global economic trends, this video will keep you informed and engaged, so stay tuned till the end!</p>
                    <a href="https://www.youtube.com/watch?v=8IHZdgrsWzg" target="_blank" className="button">Watch</a>
                </div>

                <div className="projects__card">
                    <h3>This sector is up 10% in 10 days | CA Rachana Ranade</h3>
                    <img src={aave} alt="youtube video" />
                    <p>#motivation #success #life
#motivation #life #success 
How to FIND YOUR PURPOSE - 

If you have ever wondered what your purpose is in life... Watch this video...

~ GC</p>
 <a href="https://www.youtube.com/watch?v=3ZD4OHkMy3U" target="_blank" className="button">Watch</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;