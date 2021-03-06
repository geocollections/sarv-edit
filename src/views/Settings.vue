<template>
  <div class="settings">
    <div class="row mt-4">
      <div class="col">
        <p class="table-title mb-2">{{ $t("header.settings") }}</p>
      </div>
    </div>

    <!-- COLORS -->
    <v-card
      class="mt-2"
      id="block-colors"
      :color="bodyColor.split('n-')[0] + 'n-5'"
      elevation="4"
    >
      <v-card-title class="pt-2 pb-1">
        <div
          class="card-title--clickable"
          @click="block.colors = !block.colors"
        >
          <span>{{ $t("settings.colors") }}</span>
          <v-icon right>fas fa-paint-roller</v-icon>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="block.colors = !block.colors"
          :color="bodyActiveColor"
        >
          <v-icon>{{
            block.colors ? "fas fa-angle-up" : "fas fa-angle-down"
          }}</v-icon>
        </v-btn>
      </v-card-title>

      <transition>
        <div v-show="block.colors" class="px-1 pt-1 pb-2">
          <Colors />
        </div>
      </transition>
    </v-card>

    <!-- ACCESSIBILITY -->
    <v-card
      class="mt-2"
      id="block-accessibility"
      :color="bodyColor.split('n-')[0] + 'n-5'"
      elevation="4"
    >
      <v-card-title class="pt-2 pb-1">
        <div
          class="card-title--clickable"
          @click="block.accessibility = !block.accessibility"
        >
          <span>{{ $t("settings.accessibility") }}</span>
          <v-icon right>fas fa-wrench</v-icon>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="block.accessibility = !block.accessibility"
          :color="bodyActiveColor"
        >
          <v-icon>{{
            block.accessibility ? "fas fa-angle-up" : "fas fa-angle-down"
          }}</v-icon>
        </v-btn>
      </v-card-title>

      <transition>
        <div v-show="block.accessibility" class="px-1 pt-1 pb-2">
          <Accessibility
            :body-active-color="bodyActiveColor"
            :body-dark="bodyDark"
          />
        </div>
      </transition>
    </v-card>

    <!-- SHORTCUTS -->
    <v-card
      class="mt-2"
      id="block-shortcuts"
      :color="bodyColor.split('n-')[0] + 'n-5'"
      elevation="4"
    >
      <v-card-title class="pt-2 pb-1">
        <div
          class="card-title--clickable"
          @click="block.shortcuts = !block.shortcuts"
        >
          <span>{{ $t("settings.shortcuts") }}</span>
          <v-icon right>fas fa-share-square</v-icon>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="block.shortcuts = !block.shortcuts"
          :color="bodyActiveColor"
        >
          <v-icon>{{
            block.shortcuts ? "fas fa-angle-up" : "fas fa-angle-down"
          }}</v-icon>
        </v-btn>
      </v-card-title>

      <transition>
        <div v-show="block.shortcuts" class="pa-1">
          <shortcuts
            :bodyActiveColor="bodyActiveColor"
            :bodyActiveColorDark="bodyActiveColorDark"
          />
        </div>
      </transition>
    </v-card>

    <!-- SECURITY -->
    <v-card
      v-if="false"
      class="mt-2"
      id="block-security"
      :color="bodyColor.split('n-')[0] + 'n-5'"
      elevation="4"
    >
      <v-card-title class="pt-2 pb-1">
        <div
          class="card-title--clickable"
          @click="block.security = !block.security"
        >
          <span>{{ $t("settings.security") }}</span>
          <v-icon right>fas fa-user-shield</v-icon>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="block.security = !block.security"
          :color="bodyActiveColor"
        >
          <v-icon>{{
            block.security ? "fas fa-angle-up" : "fas fa-angle-down"
          }}</v-icon>
        </v-btn>
      </v-card-title>

      <transition>
        <div v-if="block.security">
          <Security />
        </div>
      </transition>
    </v-card>

    <!-- PERMISSIONS -->
    <v-card
      class="mt-2"
      id="block-permissions"
      :color="bodyColor.split('n-')[0] + 'n-5'"
      elevation="4"
    >
      <v-card-title class="pt-2 pb-1">
        <div
          class="card-title--clickable"
          @click="block.permissions = !block.permissions"
        >
          <span>{{ $t("settings.permissions") }}</span>
          <v-icon right>fas fa-user-lock</v-icon>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="block.permissions = !block.permissions"
          :color="bodyActiveColor"
        >
          <v-icon>{{
            block.permissions ? "fas fa-angle-up" : "fas fa-angle-down"
          }}</v-icon>
        </v-btn>
      </v-card-title>

      <transition>
        <div v-if="block.permissions">
          <PermissionsTable :perms="getPermissions" :body-color="bodyColor" />
        </div>
      </transition>
    </v-card>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";
import Shortcuts from "../components/partial/settings/Shortcuts";
import Accessibility from "../components/partial/settings/Accessibility";
import formSectionsMixin from "../mixins/formSectionsMixin";
import { mapGetters, mapState } from "vuex";
import Colors from "../components/partial/settings/Colors";
import PermissionsTable from "../components/partial/settings/PermissionsTable";
import Security from "../components/partial/settings/Security";

export default {
  name: "Settings",

  components: { Security, PermissionsTable, Colors, Shortcuts, Accessibility },

  mixins: [formSectionsMixin],

  data() {
    return {
      block: {
        colors: false,
        accessibility: false,
        shortcuts: false,
        security: false,
        permissions: true
      }
    };
  },

  computed: {
    ...mapState("settings", [
      "bodyColor",
      "bodyDark",
      "bodyActiveColor",
      "bodyActiveColorDark",
      "showRecentUrls"
    ]),
    ...mapGetters("user", ["getPermissions"])
  }
};
</script>

<style scoped>
.card-title--clickable:hover {
  cursor: pointer;
  opacity: 0.8;
}

.table-title {
  font-size: 2rem;
  font-weight: 600;
}
</style>
