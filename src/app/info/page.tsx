import type { Metadata } from 'next';
import { getInfoPage } from '@/lib/sanityAdapter';
import InfoClient from './InfoClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Information',
  description:
    'Gemstone expertise, GIA certification, the custom-design process, and visiting information for CLEAR Jewelry at Gaysorn Centre, Bangkok.',
};

// Fallback sections — used if the Sanity infoPage singleton is empty.
// The full Studio-editable content lives in the infoPage document.
const FALLBACK_SECTIONS: any[] = [
  {
    eyebrow: { en: 'Expertise', th: 'ความเชี่ยวชาญ', zh: '专精' },
    title:   { en: 'Rare & unheated stones', th: 'อัญมณีหายากและไม่เผา', zh: '稀有 · 未经加热的宝石' },
    body: { en: ['Our atelier specializes in stones the wider market rarely touches.'], th: [''], zh: [''] },
  },
  {
    eyebrow: { en: 'Authenticity', th: 'ความแท้', zh: '正品保证' },
    title:   { en: 'GIA-certified, every time', th: 'รับรอง GIA ทุกชิ้น', zh: 'GIA 认证，逐件而行' },
    body: { en: ['Every signature stone arrives with a current GIA report.'], th: [''], zh: [''] },
  },
  {
    eyebrow: { en: 'Bespoke', th: 'งานสั่งทำ', zh: '定制' },
    title:   { en: 'The custom design process', th: 'กระบวนการออกแบบเฉพาะตัว', zh: '定制设计流程' },
    body: { en: ['Bring an idea, an heirloom, or a stone you love.'], th: [''], zh: [''] },
  },
  {
    eyebrow: { en: 'Visiting', th: 'การเยี่ยมชม', zh: '探访' },
    title:   { en: 'How to find us', th: 'วิธีมาหาเรา', zh: '抵达指引' },
    body: { en: ['Gaysorn Centre, 3rd Floor, Bangkok.'], th: [''], zh: [''] },
  },
];

export default async function InfoPage() {
  const cms = (await getInfoPage()) as any;
  const sections = Array.isArray(cms?.sections) && cms.sections.length > 0
    ? cms.sections.map((s: any) => {
        // Sanity ships body as [{en,th,zh}, ...]; InfoClient expects body as
        // { en: [...], th: [...], zh: [...] } (per-locale arrays) so we pivot here.
        const bodyArr: any[] = Array.isArray(s?.body) ? s.body : [];
        return {
          eyebrow: s?.eyebrow || { en: '', th: '', zh: '' },
          title:   s?.title   || { en: '', th: '', zh: '' },
          body: {
            en: bodyArr.map((p) => p?.en || ''),
            th: bodyArr.map((p) => p?.th || ''),
            zh: bodyArr.map((p) => p?.zh || ''),
          },
        };
      })
    : FALLBACK_SECTIONS;
  return <InfoClient sections={sections} />;
}
