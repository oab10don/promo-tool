import type { SkinType } from "./skin-types";

export type Product = {
  id: string;
  name: string;
  url: string;
  amazonUrl?: string;
  baseUrl?: string;
  image?: string;
  why: string;
  howTo: string;
  caution: string;
  tags: string[];
};

export const RECOMMENDATIONS: Record<SkinType, Product[]> = {
  DRY: [
    {
      id: "dry-1",
      name: "カラダうるおう ハーブティー",
      url: "https://item.rakuten.co.jp/mariko-s/10000243/",
      image:
        "https://shop.r10s.jp/mariko-s/cabinet/10053999/10708808/imgrc0101601837.jpg",
      why: "内側からのうるおいをサポートするブレンドティーです。",
      howTo: "1日1〜2杯、リラックスタイムにお召し上がりください。",
      caution:
        "体質に合わない場合は使用を中止してください。妊娠中の方は医師にご相談ください。",
      tags: ["インナーケア", "ハーブティー", "うるおい"],
    },
    {
      id: "dry-2",
      name: "月桃石鹸",
      url: "https://item.rakuten.co.jp/mariko-s/10000182/",
      why: "月桃のチカラで洗い上がりのつっぱりをやわらげます。",
      howTo: "よく泡立て、やさしく洗顔してください。",
      caution:
        "お肌に異常を感じた場合は使用を中止し、皮膚科医にご相談ください。",
      tags: ["洗顔", "石鹸", "月桃"],
    },
    {
      id: "dry-3",
      name: "ローズゼラニウム ハーブウォーター",
      url: "https://item.rakuten.co.jp/mariko-s/10000198/",
      why: "華やかな香りで気分を整えながら、お肌にうるおいを届けます。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "初めてお使いの際はパッチテストをおすすめします。お肌に合わない場合は使用を中止してください。",
      tags: ["化粧水", "ハーブウォーター", "ローズゼラニウム"],
    },
  ],
  SENSITIVE: [
    {
      id: "sens-1",
      name: "クレイ石鹸ホワイト",
      url: "https://item.rakuten.co.jp/mariko-s/10000250/",
      image:
        "https://shop.r10s.jp/mariko-s/cabinet/10053999/10920673/029-1-3.jpg",
      why: "ホワイトクレイのやさしい洗い心地で、デリケートな肌をいたわります。",
      howTo: "たっぷりの泡で、こすらずやさしく洗ってください。",
      caution:
        "お肌に異常を感じた場合は使用を中止し、皮膚科医にご相談ください。",
      tags: ["洗顔", "クレイ", "低刺激"],
    },
    {
      id: "sens-2",
      name: "カレンデュラ ハーブウォーター",
      url: "https://item.rakuten.co.jp/mariko-s/10000205/",
      image:
        "https://shop.r10s.jp/mariko-s/cabinet/10064076/11079939/imgrc0104146764.jpg",
      why: "カレンデュラが穏やかにお肌を整え、やさしくうるおいを届けます。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "キク科アレルギーの方はご注意ください。パッチテストをおすすめします。",
      tags: ["化粧水", "ハーブウォーター", "カレンデュラ"],
    },
    {
      id: "sens-3",
      name: "ジャーマンカモミール ハーブティンクチャー",
      url: "https://item.rakuten.co.jp/mariko-s/10000090/",
      image:
        "https://shop.r10s.jp/mariko-s/cabinet/10053999/10057391/imgrc0098612667.jpg",
      why: "カモミールの穏やかなチカラで、ゆらぎがちな肌をサポートします。",
      howTo: "水やぬるま湯で薄めてお使いください。",
      caution:
        "キク科アレルギーの方はご注意ください。妊娠中の方は医師にご相談ください。",
      tags: ["ティンクチャー", "カモミール", "やさしさ"],
    },
  ],
  DULLNESS: [
    {
      id: "dull-1",
      name: "マルベリー桑の葉 ハーブウォーター",
      url: "https://item.rakuten.co.jp/mariko-s/10000230/",
      image:
        "https://shop.r10s.jp/mariko-s/cabinet/10064076/12945361/1.jpg",
      why: "桑の葉エキスが、お肌のトーンを整えるサポートをします。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "初めてお使いの際はパッチテストをおすすめします。お肌に合わない場合は使用を中止してください。",
      tags: ["化粧水", "ハーブウォーター", "桑の葉"],
    },
    {
      id: "dull-2",
      name: "柚子ハーブウォーター",
      url: "https://item.rakuten.co.jp/mariko-s/10000188/",
      why: "柚子の爽やかな香りとともに、明るい印象のお肌をサポートします。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "初めてお使いの際はパッチテストをおすすめします。光感作の可能性があるため、使用後は紫外線にご注意ください。",
      tags: ["化粧水", "ハーブウォーター", "柚子"],
    },
    {
      id: "dull-3",
      name: "夏のキレイ ハーブティー",
      url: "https://item.rakuten.co.jp/mariko-s/10000228/",
      why: "内側からめぐりを整え、透明感をサポートするブレンドです。",
      howTo: "1日1〜2杯、お好きなタイミングでお召し上がりください。",
      caution:
        "体質に合わない場合は使用を中止してください。妊娠中の方は医師にご相談ください。",
      tags: ["インナーケア", "ハーブティー", "透明感"],
    },
  ],
  BARRIER: [
    {
      id: "bar-2",
      name: "茶葉化粧水",
      url: "https://item.rakuten.co.jp/mariko-s/10000079/",
      image:
        "https://shop.r10s.jp/mariko-s/cabinet/10339585/1.jpg",
      why: "茶葉のチカラでお肌を整え、うるおいを守ります。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "お肌に異常を感じた場合は使用を中止し、皮膚科医にご相談ください。",
      tags: ["化粧水", "茶葉", "保湿"],
    },
    {
      id: "bar-3",
      name: "ホーリーバジル ハーブウォーター",
      url: "https://item.rakuten.co.jp/mariko-s/10000237/",
      image:
        "https://shop.r10s.jp/mariko-s/cabinet/10053999/10566160/1-5.jpg",
      why: "ホーリーバジルがお肌のコンディションを穏やかに整えます。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "初めてお使いの際はパッチテストをおすすめします。妊娠中の方は医師にご相談ください。",
      tags: ["化粧水", "ハーブウォーター", "ホーリーバジル"],
    },
    {
      id: "bar-1",
      name: "アロエベラ ハーブウォーター",
      url: "https://item.rakuten.co.jp/mariko-s/10000186/",
      why: "アロエベラが肌にうるおいを届け、バリア機能をサポートします。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "初めてお使いの際はパッチテストをおすすめします。お肌に合わない場合は使用を中止してください。",
      tags: ["化粧水", "ハーブウォーター", "アロエベラ"],
    },
  ],
};
