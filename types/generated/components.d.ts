import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContentent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contentents';
  info: {
    displayName: 'contentent';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface UiBanner extends Struct.ComponentSchema {
  collectionName: 'components_ui_banners';
  info: {
    description: '';
    displayName: 'banner';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiLinkList extends Struct.ComponentSchema {
  collectionName: 'components_ui_link_lists';
  info: {
    displayName: 'LinkList';
  };
  attributes: {
    link: Schema.Attribute.Component<'ui.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface UiLinksNavbar extends Struct.ComponentSchema {
  collectionName: 'components_ui_links_navbars';
  info: {
    displayName: 'links-navbar';
  };
  attributes: {};
}

export interface UiNavbar extends Struct.ComponentSchema {
  collectionName: 'components_ui_navbars';
  info: {
    description: '';
    displayName: 'navbar';
  };
  attributes: {
    href: Schema.Attribute.String;
    links: Schema.Attribute.Component<'ui.links-navbar', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contentent': SharedContentent;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'ui.banner': UiBanner;
      'ui.button': UiButton;
      'ui.link': UiLink;
      'ui.link-list': UiLinkList;
      'ui.links-navbar': UiLinksNavbar;
      'ui.navbar': UiNavbar;
    }
  }
}
