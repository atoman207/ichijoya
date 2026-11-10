// Clone of the [data-drawer="3,…"] element, as built at runtime by the theme's drawer script.
export default function DrawerContact() {
  return (
    <div className="L:u-mt-0  u-mt-30  L:u-pl-0  u-pr-20  L:u-pl-0  u-pl-20  u-flex  u-column  u-items-center">
      <p className="M:u-size-18  u-size-15  u-700  u-textcenter  u-mb-10  u-flex  u-justify-center  u-items-end">
        <span>
          {"\\"}
        </span>
        <span className="u-pr-3  u-pl-3">
          畳・襖は一畳屋に
          <br className="M:u-hidden" />
          お気軽にご相談ください！
        </span>
        <span>
          /
        </span>
      </p>
      <p className="c-flex  c-flex--x5   M:u-wrap-no  u-wrap">
        <span>
          <img src="/assets/images/common/svg/fukidashi-free.svg" alt="無料お見積りOK" loading="lazy" width="90" height="" className="p-svg-text  M:u-w-90  u-w-70" />
        </span>
        <span>
          <a href="tel:0120158108">
            <img src="/assets/images/svg/t-red-freedial.svg" alt="0120-158-108" loading="lazy" width="400" height="" className="p-svg-text  u-w-400" />
          </a>
        </span>
      </p>
      <p className="u-flex  L:u-w-full  u-size-13  u-lh-14  u-700  u-justify-end  L:u-mt-0  u-mt-5">
        <img src="/assets/images/common/svg/uketsuke-number.svg" alt="受付 8:00-18:00" loading="lazy" width="165" height="" className="p-svg-text  u-mr-10" />
        {" 土・祝日の工事もOK！（ご予約が必要です） "}
      </p>
    </div>
  )
}
