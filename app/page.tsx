const navItems = [
  { href: "#services", label: "服务" },
  { href: "#prices", label: "套餐" },
  { href: "#process", label: "流程" },
  { href: "#booking", label: "预约" },
];

const slides = [
  {
    src: "/assets/interior-reception.png",
    alt: "高端宠物洗护店接待与零售区",
    label: "接待零售区",
  },
  {
    src: "/assets/interior-wash-spa.png",
    alt: "高端宠物洗护店洗护水疗区",
    label: "洗护水疗区",
  },
  {
    src: "/assets/interior-grooming.png",
    alt: "高端宠物洗护店美容造型区",
    label: "美容造型区",
  },
];

const stats = [
  ["15+", "细分护理项目"],
  ["30min", "到店初检沟通"],
  ["4.9", "顾客综合评分"],
];

const services = [
  {
    icon: "洗",
    title: "基础香波洗护",
    description: "温和清洁、吹干梳顺、指甲耳道基础护理，适合日常清洁维护。",
  },
  {
    icon: "修",
    title: "造型修剪",
    description: "根据品种标准和主人偏好设计造型，兼顾好看与日常打理。",
  },
  {
    icon: "护",
    title: "皮毛深层护理",
    description: "针对打结、干燥、换毛期和敏感肌，提供滋养、开结与护毛方案。",
  },
  {
    icon: "住",
    title: "短时安心寄养",
    description: "独立休息区、定时饮水陪伴，到店洗护前后也能舒适等待。",
  },
];

const prices = [
  {
    tag: "日常清洁",
    title: "清爽洗护",
    price: "¥88",
    description: "适合定期洗澡、无严重打结的犬猫。",
    items: ["温和香波清洁", "吹干拉毛与基础梳理", "耳道、脚底、指甲护理"],
  },
  {
    tag: "人气推荐",
    title: "精致美容",
    price: "¥168",
    description: "洗护加造型，适合贵宾、比熊、雪纳瑞等需要修剪的宝贝。",
    items: ["清爽洗护全套", "脸部、身体、四肢造型", "护理师造型建议"],
    featured: true,
  },
  {
    tag: "深度护理",
    title: "焕毛护理",
    price: "¥228",
    description: "适合换毛期、毛发干枯、毛量较厚或需要开结护理的宠物。",
    items: ["低刺激深层清洁", "护毛精华与顺毛护理", "重点开结与掉毛管理"],
  },
];

const steps = [
  ["到店初检", "确认皮肤、耳道、指甲、打结程度和宠物情绪状态。"],
  ["方案确认", "说明护理项目、预计时长、价格范围和需要避开的敏感区域。"],
  ["分区洗护", "使用独立工具与一次性耗材，按体型和毛质控制水温风力。"],
  ["交付建议", "拍照记录造型效果，并提供居家梳毛、清洁和复约建议。"],
];

const reviews = [
  ["我家狗狗以前很怕吹风，这里护理师会先陪它熟悉环境，洗完状态特别放松。", "豆包主人"],
  ["比熊造型修得很圆，眼周也处理得干净，回家后家里人都说像换了一只。", "奶油主人"],
  ["价格提前说清楚，没有隐形加项。猫咪洗护也很温柔，过程会发照片。", "小满主人"],
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="暖爪宠物洗护店首页">
            <span className="brand-mark">爪</span>
            <span>暖爪宠物洗护店</span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button" href="#booking">
            立即预约
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护店介绍">
          <div className="container hero-layout">
            <div className="hero-content">
              <span className="eyebrow">中国高端宠物洗护空间</span>
              <h1>让每一次洗护，都像走进一间温柔的宠物会所。</h1>
              <p>
                暖爪为犬猫提供低刺激洗护、造型修剪、皮毛护理与短时寄养。前厅、洗护间、造型区分区管理，透明可视化流程，敏感宝贝也能慢慢适应。
              </p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  预约到店
                </a>
                <a className="button secondary" href="#prices">
                  查看套餐
                </a>
              </div>
              <div className="quick-stats" aria-label="门店数据">
                {stats.map(([value, label]) => (
                  <div className="stat" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="environment-carousel" aria-label="店内环境轮播图">
              {slides.map((slide) => (
                <figure className="environment-slide" key={slide.src}>
                  <img src={slide.src} alt={slide.alt} />
                  <figcaption className="slide-label">{slide.label}</figcaption>
                </figure>
              ))}
              <div className="carousel-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-head">
              <h2>按毛发、体型和性格定制护理</h2>
              <p>不赶时间、不混用毛巾工具。每只宠物到店先做皮毛与情绪观察，再匹配合适洗护方案。</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="price-band" id="prices">
          <div className="container">
            <div className="section-head">
              <h2>常用套餐</h2>
              <p>价格会根据体型、毛量、打结程度微调。到店前可先线上沟通，避免临时加项。</p>
            </div>
            <div className="price-grid">
              {prices.map((plan) => (
                <article className={`price-card${plan.featured ? " featured" : ""}`} key={plan.title}>
                  <span className="tag">{plan.tag}</span>
                  <h3>{plan.title}</h3>
                  <div className="price">
                    {plan.price} <small>起</small>
                  </div>
                  <p>{plan.description}</p>
                  <ul className="list">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="container">
            <div className="section-head">
              <h2>每一步都让主人看得明白</h2>
              <p>从接宠到交付都有记录，护理师会把发现的问题和后续护理建议同步给主人。</p>
            </div>
            <div className="process-row">
              {steps.map(([title, description]) => (
                <div className="step" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews" aria-label="顾客评价">
          <div className="container">
            <div className="section-head">
              <h2>附近宠物主的真实反馈</h2>
              <p>我们更在意长期稳定的信任，所以每一次服务都从耐心开始。</p>
            </div>
            <div className="review-grid">
              {reviews.map(([quote, author]) => (
                <article className="review" key={author}>
                  <div className="stars">★★★★★</div>
                  <p>{quote}</p>
                  <strong>{author}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="container booking-wrap">
            <div className="booking-copy">
              <h2>预约一次轻松、干净、被好好照顾的洗护。</h2>
              <p>填写宠物情况后，我们会在营业时间内联系确认。急需当天到店可直接电话沟通。</p>
              <div className="contact-list">
                <span>营业时间：周一至周日 10:00 - 20:00</span>
                <span>门店地址：上海市普陀区宜川路街道陕西北路1620号</span>
                <span>预约电话：400-880-6620</span>
              </div>
              <figure className="store-map">
                <img src="/assets/store-map-ai.png" alt="暖爪宠物洗护店位于陕西北路1620号的可爱风格地图" />
                <figcaption>地图标记：陕西北路1620号，到店入口在门店标记处。</figcaption>
              </figure>
            </div>
            <div className="booking-panel">
              <form>
                <label>
                  主人姓名
                  <input type="text" name="name" placeholder="请输入姓名" />
                </label>
                <label>
                  联系电话
                  <input type="tel" name="phone" placeholder="请输入手机号" />
                </label>
                <label>
                  宠物类型
                  <select name="pet" defaultValue="小型犬">
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>猫咪</option>
                    <option>其他宠物</option>
                  </select>
                </label>
                <label>
                  预约项目
                  <select name="service" defaultValue="清爽洗护">
                    <option>清爽洗护</option>
                    <option>精致美容</option>
                    <option>焕毛护理</option>
                    <option>短时寄养</option>
                  </select>
                </label>
                <label className="full">
                  期望到店时间
                  <input type="datetime-local" name="arrivalTime" />
                </label>
                <label className="full">
                  宠物情况
                  <textarea name="message" placeholder="例如：体重、毛发打结、是否怕水怕吹风" />
                </label>
                <div className="submit-row">
                  <button className="button" type="button">
                    提交预约
                  </button>
                  <span>提交后将由门店人工确认时间</span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-row">
          <span>© 2026 暖爪宠物洗护店</span>
          <span>专业洗护 · 透明流程 · 温柔对待每一只宝贝</span>
        </div>
      </footer>
    </>
  );
}
