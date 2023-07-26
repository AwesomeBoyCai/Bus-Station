<template>
  <div class="container">
    <h1>退票</h1>
    <h6>
      <span>已取票：</span>
      "已取得车票，请到始发站的"综合窗口"办理退票。"
    </h6>
    <h6>
      <span>未取票：</span>
      " 未取得车票，可在本网站操作退票。网上退票功能将在发车时刻前2小时关闭，关闭后只能到始发站办理退票手续。"
    </h6>
    <h3>特别声明:</h3>
    <div class="step">
      <p>一、退票手续费标准：</p>
      <p class="index">
        根据交通运输部、物价局的相关规定以及联网车站的有关规定，旅客退票将按下列标准向始发站支付退票费
        <br />
        （退票费直接从购票款中扣除）。
      </p>
      <p class="index">
        1、当次客运班车开车时间两小时前办理退票，按票面金额的10%收取退票费，不足5角不计收，不足1元按5角计收。
      </p>
      <p class="index">
        2、当次客运班车开车时间前两小时以内办理退票，按票面金额的20%收取退票费，不足5角不计收，不足1元按5角计收。
      </p>
      <p class="index">
        3、当次客运班车开车后一小时内办理退票，按票面金额的50%收取退票费，不足5角不计收，不足1元按5角计收(此标准只适用于成都地区部分车站，详情请咨询车站)。
      </p>
      <p class="index">4、当日退票需当日在车站营业时间内办理，最后一班车票退票需在发车前办理。</p>
      <p class="index">
        5、因不可抗拒原因或始发站原因造成客运班车停运，汽车客运票务网将通过您预留的手机号码短信通知您退票。
      </p>
      <p class="index">6、因各车站退票规定有差异，本网站将以各车站实际规定代扣退票手续费。</p>
      <p class="index">
        7、在网上退票又需要退票单据作为报销凭证时，旅客在该票的退票状态为“退票成功”后24小时以内，可到发车站售换票窗口办理。
      </p>
      <p class="index">8、网上退票的票款根据您持卡所在银行不同，预计7个工作日内退款到您的原支付账户。</p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  padding: 30px 80px;
  width: 100%;
  min-height: 800px;
  border: 1px solid #5678a8;
  h1 {
    text-align: center;
    font-size: 36px;
    color: #e27500;
    font-weight: normal;
  }
  h6 {
    font-size: 18px;
    padding-top: 42px;
    font-weight: normal;
    color: #00618b;
    span {
      color: #e27500;
    }
  }
  h3 {
    font-size: 24px;
    color: #00618b;
    padding: 42px 0;
    font-weight: bold;
  }
  .step {
    padding-bottom: 42px;
    p {
      line-height: 1.5;
      font-size: 18px;
      font-weight: normal;
      color: #00618b;
    }
    .index {
      text-indent: 2em;
      padding-bottom: 2.875rem;
    }
  }
}
</style>
