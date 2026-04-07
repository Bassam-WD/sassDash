export type Vendor = {
  src: string               // favicon URL
  name: string              // اسم الـ vendor
  website: string           // الموقع
  rating: number            // تقييم من 100
  ratingGrowthPercent: number  // نسبة التغيير (+ أو -)
  lastAssessed: string      // آخر تقييم
  categories: string[]      // array من الـ tags
}