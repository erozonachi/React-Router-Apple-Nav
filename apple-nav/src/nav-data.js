const navList = [
  {
    id: '/',
    label: 'Home',
  },
  {
    id: 'mac',
    label: 'Mac',
    subLinks: [
      {
        id: 'macbook',
        label: 'MacBook',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/macbook__do4qnh249seq_large.svg'
      },
      {
        id: 'air',
        label: 'MacBook Air',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/macbookair__ej39du0gz4uq_large.svg'
      },
      {
        id: 'pro',
        label: 'MacBook Pro',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac_pro__eer4bfwlutme_large.svg'
      },
      {
        id: 'imac',
        label: 'iMac',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac__dkswmjfqeziq_large.svg'
      },
      {
        id: 'imac_pro',
        label: 'iMac Pro',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac_pro__eer4bfwlutme_large.svg'
      },
      {
        id: 'mac_pro',
        label: 'Mac Pro',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_pro__bn92faz71k6a_large.svg'
      },
      {
        id: 'mac_mini',
        label: 'Mac mini',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/macmini__c6u0it831y0y_large.svg'
      },
      {
        id: 'compare',
        label: 'Compare',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg'
      },
      {
        id: 'pro_display_xdr',
        label: 'Pro Display XDR',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg'
      },
      {
        id: 'accessories',
        label: 'Accessories',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg'
      },
      {
        id: 'mojave',
        label: 'Mojave',
        url:
          'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_osx__dntc9ef2limq_large.svg'
      }
    ]
  },
  {
    id: 'ipad',
    label: 'iPad',
    subLinks: [
      {
        id: 'ipad_pro',
        label: 'iPad Pro',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ipadpro_light__dxq7nxjgsd2e_large.svg'
      },
      {
        id: 'ipad_air',
        label: 'iPad Air',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ipadair_light__gan6yfrffc66_large.svg'
      },
      {
        id: 'i_pad',
        label: 'iPad',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ipad_light__expohijp19si_large.svg'
      },
      {
        id: 'ipad_mini',
        label: 'iPad Mini',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ipadmini_light__bxpulkud30s2_large.svg'
      },
      {
        id: 'compare',
        label: 'Compare',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ipad_comp_light__f80dzq6i8sq6_large.svg'
      },
      {
        id: 'apple_pencil',
        label: 'Apple Pencil',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/apple_pencil_light__e9zorbynwqie_large.svg'
      },
      {
        id: 'smart_keyboard',
        label: 'Smart Keyboard',
        url:
          'https://www.apple.com//v/ipad/home/ar/images/chapternav/keyboard_light__cjbr6d6i2vbm_large.svg'
      },
      {
        id: 'accessories',
        label: 'Accessories',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ipad_acc_light__ebtftz3r2rwy_large.svg'
      },
      {
        id: 'ios_12',
        label: 'iOS 12',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ios_light__d8hlu55ivueu_large.svg'
      }
    ]
  },
  {
    id: 'iphone',
    label: 'iPhone',
    subLinks: [
      {
        id: 'iphone_xs',
        label: 'iPhone Xs',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/iphonexs__haztskdvse62_large.svg'
      },
      {
        id: 'iphone_xr',
        label: 'iPhone XR',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/iphonexr__dc5ls4xainsm_large.svg'
      },
      {
        id: 'iphone_8',
        label: 'iPhone 8',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/iphone8__ces17dqh6j6q_large.svg'
      },
      {
        id: 'iphone_7',
        label: 'iPhone 7',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/iphone7__ew0p3ahbemuu_large.svg'
      },
      {
        id: 'compare',
        label: 'Compare',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/compare__fx9dq75qwnma_large.svg'
      },
      {
        id: 'apple_card',
        label: 'Apple Card',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/applecard__gip86jgm8zee_large.svg'
      },
      {
        id: 'air_pods',
        label: 'Air Pods',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/airpods__c6lrgkbcjdg2_large.svg'
      },
      {
        id: 'accessories',
        label: 'Accessories',
        url:
          'https://www.apple.com/v/iphone/home/aa/images/chapternav/accessories__bfu76z4hzusy_large.svg'
      },
      {
        id: 'ios_12',
        label: 'iOS 12',
        url:
          'https://www.apple.com/v/ipad/home/ar/images/chapternav/ios_light__d8hlu55ivueu_large.svg'
      }
    ]
  },
  {
    id: 'watch',
    label: 'Watch',
    subLinks: [
      {
        id: 'apple_watch_series_3',
        label: 'Apple Watch Series 3',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_series_2__bk595ih4bliu_large.svg'
      },
      {
        id: 'apple_watch_nike+',
        label: 'Apple Watch Nike+',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_nike__mkjgkrrlq2ye_large.svg'
      },
      {
        id: 'apple_watch_hermès',
        label: 'Apple Watch Hermès',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_hermes__b1zeoxbn0df6_large.svg'
      },
      {
        id: 'apple_watch_eries_3',
        label: 'Apple Watch Series 3',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_edition__botzv6l1ftua_large.svg'
      },
      {
        id: 'watch_os',
        label: 'watchOS',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_watch_os__fctkp231ik6e_large.svg'
      },
      {
        id: 'bands',
        label: 'Bands',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_bands__f5qi8icu6suq_large.svg'
      },
      {
        id: 'accessories',
        label: 'Accessories',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_accessories__fix8lwwxvtu2_large.svg'
      },
      {
        id: 'compare',
        label: 'Compare',
        url:
          'https://www.apple.com/v/watch/home/p/images/overview/watch_nav_compare__bjddtmfseahe_large.svg'
      }
    ]
  },
  {
    id: 'tv',
    label: 'TV',
    subLinks: [
      {
        id: 'apple_tv',
        label: 'Apple TV',
        url:
          'https://www.apple.com/v/tv/home/g/images/home/apple_tv_app_dark__blle10nnpq3m_large.svg'
      },
      {
        id: 'apple_tv+',
        label: 'Apple TV+',
        url:
          'https://www.apple.com/v/tv/home/g/images/home/apple_tv_plus_dark__fntbqaxjuouy_large.svg'
      },
      {
        id: 'apple_tv_4k',
        label: 'Apple TV 4k',
        url:
          'https://www.apple.com/v/tv/home/g/images/home/apple_tv_dark__ern1bz8tkwqe_large.svg'
      },
      {
        id: 'apple_tv_hd',
        label: 'Apple TV HD',
        url:
          'https://www.apple.com/v/tv/home/g/images/home/apple_tv_dark__ern1bz8tkwqe_large.svg'
      },
      {
        id: 'air_play',
        label: 'Air Play',
        url:
          'https://www.apple.com/v/tv/home/g/images/home/airplay_dark__dqiw3rzeujma_large.svg'
      },
      {
        id: 'accessories',
        label: 'Accessories',
        url:
          'https://www.apple.com/v/tv/home/g/images/home/accessories_dark__dybfk40y28om_large.svg'
      }
    ]
  },
  {
    id: 'music',
    label: 'Music',
    subLinks: [
      {
        id: 'apple_music',
        label: 'Apple Music',
        url:
          'https://www.apple.com/v/music/h/images/overview/icons/apple_music_large.svg'
      },
      {
        id: 'i_tunes',
        label: 'iTunes',
        url:
          'https://www.apple.com/v/music/h/images/overview/icons/itunes_large.svg'
      },
      {
        id: 'homepod',
        label: 'HomePod',
        url:
          'https://www.apple.com/v/music/h/images/overview/icons/homepod_icon_large.svg'
      },
      {
        id: 'airpod',
        label: 'AirPod',
        url:
          'https://www.apple.com/v/music/h/images/overview/icons/airpods_icon_large.svg'
      },
      {
        id: 'ipod_touch',
        label: 'iPod touch',
        url:
          'https://www.apple.com/v/music/h/images/overview/icons/ipod_touch_light_large.svg'
      },
      {
        id: 'music_accessories',
        label: 'Music Accessories',
        url:
          'https://www.apple.com/v/music/h/images/overview/icons/accessories_large.svg'
      },
      {
        id: 'gift_cards',
        label: 'Gift Cards',
        url:
          'https://www.apple.com/v/music/h/images/overview/icons/gift_cards_large.svg'
      }
    ]
  }
];
