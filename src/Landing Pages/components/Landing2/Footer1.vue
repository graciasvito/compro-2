<template>
  <div class="compro-footer" id="contact">
    <div class="big-container">
      <div class="left-footer">
        <div class="row align-center">
          <img
            src="../content/Logo Jala Bumi Perkasa.png"
            style="width: 100px"
            draggable="false"
            @click="toHome"
          />
          <h2>PT. Jala Bumi Perkasa</h2>
        </div>
        <div class="contact">
          <p class="address">
            R.A Rozak / Patal - Pusri JL.LKMD No.31A RT.045 RW.009 Palembang
            30014.
          </p>
          <br />
          <p class="cp">Phone : (+62 711) 711674</p>
          <p class="cp">Fax : (+62 711) 719725</p>
          <p class="cp">E-mail : perkasa@indo.net.id</p>
        </div>
      </div>
      <div class="menu-footer">
        <h2>Menu</h2>
        <div class="list-menu">
          <ul>
            <li><a href="/"> About Jala Bumi Perkasa</a></li>
            <li><a href="/"> Projects</a></li>
          </ul>
        </div>
      </div>
      <div class="carrer-footer">
        <h2>Carrer</h2>
        <div class="list-menu">
          <ul>
            <li><a href="/"> Carrer Development</a></li>
            <li><a href="/"> Internship</a></li>
          </ul>
        </div>
      </div>
      <div class="reach-footer">
        <h2>Reach Us</h2>
        <div class="list-menu">
          <ul>
            <li><a href="/"> Head Office</a></li>
            <li><a href="/"> Branch Office</a></li>
          </ul>
        </div>
      </div>
    </div>
    ©️ 2024, PT. Jala Bumi Perkasa. All Right Reserved
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      window.location.href = "/";
    },
  },
};
</script>
