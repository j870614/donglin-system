<template>
  <main class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9">
          <div class="d-flex align-items-center">
            <button
              class="
                navbar-toggler
                my-0
                d-none d-lg-inline-block
                p-2
                toggle-btn
              "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebar"
              @click="clickSidebar"
            >
              <span class="material-icons-outlined fs-2">menu</span>
            </button>
            <h2 class="fw-bolder m-3 ms-3">彌陀之家東林寺常年佛七第422期</h2>
          </div>
          <div class="row">
            <!-- 常住公告 -->
            <div class="col-lg-5">
              <div class="card">
                <ul class="list-group list-group-flush" id="templePost">
                  <li class="list-group-item border-0">
                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-center
                        text-nowrap
                      "
                    >
                      <h3 class="fs-4 m-0 fw-bolder">彌陀之家東林寺公告</h3>
                      <a
                        href="search-post.html"
                        class="
                          card-text
                          fw-bolder
                          d-flex
                          align-items-center
                          link-dark
                          fs-6
                        "
                      >
                        顯示更多
                        <span class="material-icons-outlined"
                          >arrow_forward</span
                        >
                      </a>
                    </div>
                  </li>

                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <span
                          class="
                            badge
                            bg-primary-tint
                            text-primary
                            px-3
                            py-2
                            fs-6
                          "
                        >
                          執事異動
                        </span>
                        <p class="mt-2 m-0">普某師擔任知客師</p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        8月31日
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- 系統公告 -->
              <div class="card mt-3">
                <ul class="list-group list-group-flush" id="systemPost">
                  <li class="list-group-item border-0">
                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-center
                        text-nowrap
                      "
                    >
                      <h3 class="fs-4 m-0 fw-bolder">系統公告</h3>
                      <a
                        href="search-post.html"
                        class="
                          card-text
                          fw-bolder
                          d-flex
                          align-items-center
                          link-dark
                          fs-6
                        "
                      >
                        顯示更多
                        <span class="material-icons-outlined"
                          >arrow_forward</span
                        >
                      </a>
                    </div>
                  </li>
                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <span
                          class="
                            badge
                            bg-neutral-40
                            text-neutral-80
                            px-3
                            py-2
                            fs-6
                          "
                        >
                          系統管理員
                        </span>
                        <p class="mt-2 m-0">
                          系統管理員已核發執事權限，歡迎使用寺務系統
                        </p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        下午12：00
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <span
                          class="
                            badge
                            bg-secondary-tint
                            text-secondary
                            px-3
                            py-2
                            fs-6
                          "
                        >
                          系統維護
                        </span>
                        <p class="mt-2 m-0">
                          9/15 20：00 -
                          22：00進行系統更新及維護，維護時段系統暫時無法登入使用
                        </p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        8月31日
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 通知列表 -->
            <div class="col-lg-7">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item border-0">
                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-center
                        text-nowrap
                      "
                    >
                      <h3 class="fs-4 m-0 fw-bolder">通知</h3>
                      <a
                        href="#"
                        class="
                          card-text
                          fw-bolder
                          d-flex
                          align-items-center
                          link-dark
                          fs-6
                        "
                      >
                        顯示更多
                        <span class="material-icons-outlined"
                          >arrow_forward</span
                        >
                      </a>
                    </div>
                  </li>
                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <div class="d-flex">
                          <span
                            class="
                              badge
                              bg-primary-tint
                              text-primary
                              px-3
                              py-2
                              fs-6
                            "
                          >
                            權限申請
                          </span>
                          <span class="fs-5 fw-bolder ms-3"
                            >新使用者 / 普甲</span
                          >
                        </div>

                        <p class="mt-2 m-0">新使用者普甲申請知客權限</p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        下午3:00</span
                      >
                    </div>
                  </li>
                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <div class="d-flex">
                          <span
                            class="
                              badge
                              bg-primary-tint
                              text-primary
                              px-3
                              py-2
                              fs-6
                            "
                          >
                            權限申請
                          </span>
                          <span class="fs-5 fw-bolder ms-3"
                            >新使用者 / 普丙</span
                          >
                        </div>

                        <p class="mt-2 m-0">新使用者普丙申請知客權限</p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        下午2:00
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <div class="d-flex">
                          <span
                            class="badge bg-primary text-white px-3 py-2 fs-6"
                            >皈依報名</span
                          >
                          <span class="fs-5 fw-bolder ms-3">知客 / 普甲</span>
                        </div>

                        <p class="mt-2 m-0">蓮友王小明已報名皈依</p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        晚上08:00
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <div class="d-flex">
                          <span
                            class="badge bg-primary text-white px-3 py-2 fs-6"
                            >參訪登記</span
                          >
                          <span class="fs-5 fw-bolder ms-3">知客 / 普丙</span>
                        </div>

                        <p class="mt-2 m-0">台北念佛會9/10共20人回寺用齋</p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        8 月 30日</span
                      >
                    </div>
                  </li>
                  <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                      <div class="pe-2">
                        <div class="d-flex">
                          <span
                            class="
                              badge
                              bg-neutral-40
                              text-neutral-80
                              px-3
                              py-2
                              fs-6
                            "
                          >
                            已離單
                          </span>
                          <span class="fs-5 fw-bolder ms-3"
                            >寮房師 / 普子師</span
                          >
                        </div>

                        <p class="mt-2 m-0">化無法師已離單</p>
                      </div>
                      <span
                        class="
                          badge
                          bg-neutral-40
                          text-neutral-80
                          align-self-center
                          fs-7
                          p-2
                        "
                      >
                        8 月 27日</span
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 行事曆、待辦事項 -->
        <div class="col-lg-3 d-none d-lg-inline-block bg-white right">
          <div class="row">
            <div class="col-12">
              <!-- 行事曆 -->
              <h3 class="fw-bold fs-4 my-3">行事曆</h3>
              <div class="calendar"></div>
              <!-- 今日行程 -->
              <div class="schedule my-3">
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    text-nowrap
                    my-3
                  "
                >
                  <h3 class="fs-4 m-0 fw-bolder">今日行程</h3>
                  <a
                    href="#"
                    class="
                      card-text
                      fw-bolder
                      d-flex
                      align-items-center
                      link-dark
                      fs-6
                    "
                  >
                    查看更多
                    <span class="material-icons-outlined">arrow_forward</span>
                  </a>
                </div>
                <div class="card my-3">
                  <div class="card-body">
                    <div class="pe-2">
                      <div
                        class="
                          d-flex
                          align-items-center
                          justify-content-between
                        "
                      >
                        <p class="m-0">第442期佛七起七</p>
                        <span
                          class="badge bg-neutral-40 text-neutral-80 fs-7 p-2"
                        >
                          整天
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card my-3">
                  <div class="card-body">
                    <div class="pe-2">
                      <div
                        class="
                          d-flex
                          align-items-center
                          justify-content-between
                        "
                      >
                        <p class="m-0">皈依</p>
                        <span
                          class="badge bg-neutral-40 text-neutral-80 fs-7 p-2"
                          >下午 2：00</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 代辦事項 -->
              <div class="todolist my-3">
                <h3 class="fw-bold fs-4 my-3">代辦事項</h3>
                <form class="row gy-3">
                  <div class="col-12">
                    <input
                      class="form-check-input fs-5 fw-bold"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label fs-5 fw-bold ms-3"
                      for="flexCheckDefault"
                    >
                      皈依證填寫
                    </label>
                  </div>
                  <div class="col-12">
                    <button
                      type="button"
                      class="
                        btn btn-outline-primary
                        w-100
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <span class="material-icons-outlined">
                        add_circle_outline
                      </span>
                      <span class="fs-5">新增代辦事項</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
