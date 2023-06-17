import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../Context';
import Texts from '../Texts';
import ImagesSlide from '../components/ImagesSlide';
import Cv from '../components/Cv';
import ContactUs from '../components/ContactUs';

export default function Home() {

    const { lang, setLang, activeImg, setActiveImg, page, play } = useContext(Context);
    const texts = Texts[lang];

    useEffect(()=>{
        if (play){
            const timer = setTimeout(() =>activeImg < 29 ? setActiveImg(activeImg + 1) : setActiveImg(1), 5000);
            return () => clearTimeout(timer);
        }
    },[activeImg, play])

    return (
        <div className='landing-container'>
            <div className='about-container'>
                <div className={`${page != 'landing' && "remove-about"}`}>
                    <h3>{texts.about}</h3>
                    {lang == 'ar' && <p>الدكتور سلطان محمد بن صويلح الثعلي حاصل على درجة دكتوراة الفلسفة في الاقتصاد  عام 2012 م. مهنته رجل اعمال يقيم في مدينة الرياض  وقدم الدكتور سلطان عدد من المبادرات لتعزيز وتمكين النشاط الاقتصادي والتجاري من خلال المساهمة في عضوية عدد من مجالس الاعمال الدولية واللجان الوطنية في اتحاد الغرف السعودية وغرفة الرياض بالاضافة الى رئاسة الغرفة التجارية الدولية ولديه نشاطات اقتصادية في مجتمع المال والاعمال وتمكين الشباب من خلال حاضنات ومسرعات الاعمال وتشجيع الابتكار والعمل التطوعي.<br/> ينتمي الدكتور سلطان لعائلة الثعلي احد العوائل العربية العدنانية شريفة النسب التي يمتد تاريخها الى العصر الجاهلي واستوطنت منطقة  الحجاز ويمتد نسبها  الى سيدنا اسماعيل بن ابراهيم عليهم السلام  وهي من سلالة مضر بن نزار بن معد بن عدنان الذي ينتمي اليه بنو هاشم ورسول الله محمد عليه الصلاة والسلام وقد دخل جدهم في الاسلام بعد معركة حنين في السنة الثامنة للهجرة  وخلال القرن الحادي عشر اصبحت عائلة الثعلي من بيوت الامارة في منطقة مكة المكرمه لثلاثة قرون وكان لعائلة. الثعلي شرف المشاركة في الثوره العربيه الكبرى لاسقاط الدوله العثمانيه بقيادة الشريف حسين.<br/> وكذلك المساهمة في   تأسيس الدوله السعودية الاولى مع الامام محمد بن سعود وتوجت تلك الاسهامات بنصرة ومبايعة المؤسس الملك عبد العزيز في فتوحات توحيد وبناء الدولة السعودية الثالثة واستمرت مع ابناء المؤسس  من بعده  وصولا الى هذا العهد الزاهر بقيادة مولاي خادم الحرمين الشريفين الملك سلمان وقائد رويتنا المباركة سمو سيدي ولي العهد الامير محمد بن سلمان حفظم الله ورعاهم.</p>}
                    {lang == 'en' && <p>Dr. Sultan Muhammad bin Sweileh Al Thaali holds a PhD in Economics in 2012. A businessman and investor residing in Riyadh Dr. Sultan presented a number of initiatives to promote and enable economic and commercial activity by participating in the membership of a number of international business councils and national committees in the Federation of Saudi Chambers and the Riyadh Chamber, in addition to chairing the International Chamber of Commerce. Innovation and volunteer work.<br/> Dr. Sultan belongs to the Al-Thaali family, one of the honorable Adnan Arab families whose history extends back to the pre-Islamic era and settled in the Hijaz region and its lineage extends back to our master Ismail bin Ibrahim, peace be upon them. Their grandfather converted to Islam after the Battle of Hunayn in the eighth year of Hijra During the eleventh century, the Al-Thali family became one of the emirates houses in the Makkah Al-Mukarramah region for three centuries. Al-Thali had the honor of participating in the Great Arab Revolt to overthrow the Ottoman Empire, led by Sharif Hussein. <br/> As well as contributing to the establishment of the first Saudi state with Imam Muhammad bin Saud Those contributions culminated in the support and allegiance of the founder, King Abdul Aziz, in the conquests of unification and building the third Saudi state, and it continued with the sons of the founder after him, leading to this prosperous era under the leadership of my lord, Custodian of the Two Holy Mosques King Salman and the leader of our blessed vision, His Highness, Crown Prince Muhammad bin Salman, may God protect and preserve them.</p>}
                </div>
            </div>
            <div className='landing-content'>
                {page == "landing" && <ImagesSlide />}
                {page == "cv" && <Cv />}
                {page == "contact" && <ContactUs />}
                <p>{texts.rights}</p>
            </div>
        </div>
    )
}