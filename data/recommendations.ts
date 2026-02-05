import type { SkinType } from "./skin-types";

export type ProductStatus = "active" | "soldout" | "hidden";

export type Product = {
  id: string;
  name: string;
  url: string;
  amazonUrl?: string;
  subUrl?: string;
  image?: string;
  price?: string;
  volume?: string;
  why: string;
  howTo: string;
  caution: string;
  tags: string[];
  target?: string;
  highlights?: string[];
  status: ProductStatus;
};

export const RECOMMENDATIONS: Record<SkinType, Product[]> = {
  DRY: [
    {
      id: "dry-1",
      name: "Botanical Cleanser Gel",
      url: "#",
      price: "2,200円（税込）",
      volume: "150mL",
      why: "植物由来の洗浄成分がやさしく汚れを落とし、うるおいを残す洗顔ジェルです。",
      howTo: "適量を手に取り、水で泡立ててやさしく洗顔してください。",
      caution:
        "お肌に異常を感じた場合は使用を中止し、専門医にご相談ください。",
      tags: ["洗顔", "ジェル", "保湿"],
      target: "乾燥肌・つっぱりが気になる方",
      highlights: [
        "植物由来の洗浄成分で低刺激",
        "ヒアルロン酸配合で洗い上がりしっとり",
        "合成香料・着色料フリー",
      ],
      status: "active",
    },
    {
      id: "dry-2",
      name: "Calm Repair Lotion",
      url: "#",
      price: "2,800円（税込）",
      volume: "200mL",
      why: "セラミドとハーブエキスが角質層に浸透し、うるおいを長時間キープします。",
      howTo: "洗顔後、コットンまたは手のひらでやさしくなじませてください。",
      caution:
        "初めてお使いの際はパッチテストをおすすめします。",
      tags: ["化粧水", "セラミド", "しっとり"],
      target: "乾燥・インナードライが気になる方",
      highlights: [
        "3種のセラミド配合",
        "とろみテクスチャーで浸透感◎",
        "無香料・アルコールフリー",
      ],
      status: "active",
    },
  ],
  SENSITIVE: [
    {
      id: "sens-1",
      name: "Calm Repair Lotion",
      url: "#",
      price: "2,800円（税込）",
      volume: "200mL",
      why: "セラミドが角質層のバリア機能をサポートし、ゆらぎがちな肌をやさしく整えます。",
      howTo: "洗顔後、手のひらでやさしく押さえるようになじませてください。",
      caution:
        "お肌に異常を感じた場合は使用を中止し、専門医にご相談ください。",
      tags: ["化粧水", "低刺激", "バリアケア"],
      target: "敏感肌・ゆらぎ肌の方",
      highlights: [
        "パッチテスト済み",
        "7つのフリー処方",
        "赤み・ほてりを穏やかにケア",
      ],
      status: "active",
    },
    {
      id: "sens-2",
      name: "Barrier Moisture Cream",
      url: "#",
      price: "3,500円（税込）",
      volume: "50g",
      why: "シアバターとスクワランがバリア膜を形成し、外的刺激から肌を守ります。",
      howTo: "化粧水の後、適量を手に取り、やさしくなじませてください。",
      caution:
        "目の周りを避けてお使いください。異常を感じた場合は使用を中止してください。",
      tags: ["クリーム", "バリア", "保護"],
      target: "敏感肌・季節の変わり目に荒れやすい方",
      highlights: [
        "シアバター×スクワランのWバリア",
        "べたつかないのにしっかり保護",
        "ナイトケアにもおすすめ",
      ],
      status: "active",
    },
  ],
  DULLNESS: [
    {
      id: "dull-1",
      name: "UV Daily Veil SPF50",
      url: "#",
      price: "1,980円（税込）",
      volume: "40mL",
      why: "高い紫外線防御力とトーンアップ効果で、くすみの原因をブロックします。",
      howTo: "スキンケアの最後に適量を顔全体にムラなく伸ばしてください。",
      caution:
        "こまめな塗り直しをおすすめします。クレンジングでしっかり落としてください。",
      tags: ["UV", "日焼け止め", "トーンアップ"],
      target: "くすみ・日焼けが気になる方",
      highlights: [
        "SPF50 PA++++ の高防御",
        "ラベンダーカラーでトーンアップ",
        "石鹸で落とせる軽い使用感",
      ],
      status: "active",
    },
    {
      id: "dull-2",
      name: "Aroma Body Oil",
      url: "#",
      price: "3,200円（税込）",
      volume: "100mL",
      why: "天然精油のブレンドがめぐりを整え、ボディ全体にツヤとうるおいを与えます。",
      howTo: "入浴後の温まった肌に適量をなじませ、やさしくマッサージしてください。",
      caution:
        "柑橘系精油を含むため、使用直後の紫外線にご注意ください。",
      tags: ["ボディ", "オイル", "アロマ"],
      target: "ボディのくすみ・乾燥が気になる方",
      highlights: [
        "5種の天然精油ブレンド",
        "さらりとした使用感でベタつかない",
        "マッサージで巡りケアにも",
      ],
      status: "active",
    },
  ],
  BARRIER: [
    {
      id: "bar-1",
      name: "Barrier Moisture Cream",
      url: "#",
      price: "3,500円（税込）",
      volume: "50g",
      why: "シアバターとスクワランが肌をやさしく包み、バリア機能を集中的にサポートします。",
      howTo: "化粧水の後、適量を手に取り、顔全体にやさしくなじませてください。",
      caution:
        "お肌に異常を感じた場合は使用を中止してください。",
      tags: ["クリーム", "バリア", "シアバター"],
      target: "バリア機能の低下が気になる方",
      highlights: [
        "保湿持続力12時間テスト済み",
        "ナイトクリームとしても◎",
        "無香料・無着色",
      ],
      status: "active",
    },
    {
      id: "bar-2",
      name: "Herbal Bath Salt",
      url: "#",
      price: "1,500円（税込）",
      volume: "300g（約10回分）",
      why: "天然ハーブと海塩のミネラルが肌をいたわりながら、リラックスをサポートします。",
      howTo: "浴槽のお湯（約200L）に大さじ2杯を溶かしてお使いください。",
      caution:
        "追い焚き機能付き浴槽では使用をお控えください。お肌に合わない場合は使用を中止してください。",
      tags: ["入浴剤", "バスソルト", "リラックス"],
      target: "乾燥・バリア低下で全身ケアしたい方",
      highlights: [
        "死海の塩をベースに3種のハーブ配合",
        "じんわり温まるリラックスバスタイム",
        "合成着色料フリー",
      ],
      status: "active",
    },
  ],
};

/**
 * ステータスが非表示/販売停止のサンプル商品
 * seed時にサンプルとして使用する販売状態の例
 */
export const INACTIVE_PRODUCTS: Product[] = [
  {
    id: "inactive-1",
    name: "Scalp Balance Shampoo",
    url: "#",
    price: "2,400円（税込）",
    volume: "300mL",
    why: "アミノ酸系洗浄で頭皮の皮脂バランスを整え、健やかな髪へ導きます。",
    howTo: "適量を手に取り、頭皮をマッサージするように泡立てて洗ってください。",
    caution: "目に入った場合はすぐに洗い流してください。",
    tags: ["シャンプー", "スカルプ", "アミノ酸"],
    target: "頭皮ケアが気になる方",
    highlights: [
      "アミノ酸系洗浄成分",
      "ティーツリー精油で清涼感",
      "ノンシリコン",
    ],
    status: "soldout",
  },
  {
    id: "inactive-2",
    name: "Travel Starter Set",
    url: "#",
    price: "3,980円（税込）",
    volume: "洗顔30mL / 化粧水50mL / クリーム15g",
    why: "人気3アイテムのミニサイズセット。旅行やお試しにぴったりです。",
    howTo: "洗顔 → 化粧水 → クリームの順にお使いください。",
    caution: "個々の製品の注意事項をご確認ください。",
    tags: ["セット", "トライアル", "携帯用"],
    target: "初めての方・旅行のお供に",
    highlights: [
      "人気3アイテムを気軽に試せる",
      "TSA対応のミニサイズ",
      "ギフトボックス入り",
    ],
    status: "hidden",
  },
];
