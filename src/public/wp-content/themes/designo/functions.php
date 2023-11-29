<?php 

function register_theme_menus() {
  register_nav_menus(
    array(
      'menu-header' => __('Header'),
      'menu-footer' => __('Footer'),
    )
  );
}

add_action('init', 'register_theme_menus');
