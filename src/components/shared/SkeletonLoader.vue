<template>
   <div class="skeleton-loader" :class="wrapperClass">
      <component
         v-for="(item, index) in parsedTypes"
         :key="index"
         :is="getSkeletonComponent(item)"
         :class="getSkeletonClass(item)"
      />
   </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
   type: {
      type: String,
      default: 'text',
      // Available types: text, heading, avatar, image, button, card, list-item, divider, paragraph, chip, table-row
   },
   loading: {
      type: Boolean,
      default: true,
   },
   width: {
      type: [String, Number],
      default: null,
   },
   height: {
      type: [String, Number],
      default: null,
   },
   circle: {
      type: Boolean,
      default: false,
   },
   tile: {
      type: Boolean,
      default: false,
   },
   boilerplate: {
      type: Boolean,
      default: false,
   },
   wrapperClass: {
      type: String,
      default: '',
   },
});

const parsedTypes = computed(() => {
   return props.type.split(',').map(t => t.trim());
});

const getSkeletonComponent = type => {
   const components = {
      text: 'div',
      heading: 'div',
      avatar: 'div',
      image: 'div',
      button: 'div',
      card: 'div',
      'list-item': 'div',
      divider: 'div',
      paragraph: 'div',
      chip: 'div',
      'table-row': 'div',
   };
   return components[type] || 'div';
};

const getSkeletonClass = type => {
   const baseClasses = 'skeleton-item';
   const animation = props.boilerplate ? '' : 'skeleton-animate';

   const typeClasses = {
      text: 'skeleton-text',
      heading: 'skeleton-heading',
      avatar: 'skeleton-avatar',
      image: 'skeleton-image',
      button: 'skeleton-button',
      card: 'skeleton-card',
      'list-item': 'skeleton-list-item',
      divider: 'skeleton-divider',
      paragraph: 'skeleton-paragraph',
      chip: 'skeleton-chip',
      'table-row': 'skeleton-table-row',
   };

   const shapeClass = props.circle
      ? 'skeleton-circle'
      : props.tile
        ? 'skeleton-tile'
        : '';

   return `${baseClasses} ${typeClasses[type] || ''} ${animation} ${shapeClass}`.trim();
};

const customStyles = computed(() => {
   const styles = {};
   if (props.width) {
      styles.width =
         typeof props.width === 'number' ? `${props.width}px` : props.width;
   }
   if (props.height) {
      styles.height =
         typeof props.height === 'number' ? `${props.height}px` : props.height;
   }
   return styles;
});
</script>

<style scoped>
.skeleton-loader {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
}

.skeleton-item {
   background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
   background-size: 200% 100%;
   border-radius: 16px;
}

.skeleton-animate {
   animation: shimmer 3.5s infinite;
}

@keyframes shimmer {
   0% {
      background-position: 200% 0;
   }
   100% {
      background-position: -200% 0;
   }
}

.skeleton-text {
   height: 16px;
   width: 100%;
   max-width: 200px;
}

.skeleton-heading {
   height: 20px;
   width: 100%;
   max-width: 300px;
   margin-bottom: 0.5rem;
}

.skeleton-avatar {
   width: 48px;
   height: 48px;
   border-radius: 50%;
}

.skeleton-image {
   width: 100%;
   height: 200px;
}

.skeleton-button {
   height: 40px;
   width: 120px;
   border-radius: 8px;
}

.skeleton-card {
   width: 100%;
   height: 140px;
   border-radius: 20px;
}

.skeleton-list-item {
   height: 64px;
   width: 100%;
   border-radius: 4px;
   margin-bottom: 0.5rem;
}

.skeleton-divider {
   height: 1px;
   width: 100%;
   background: #e0e0e0;
   margin: 1rem 0;
}

.skeleton-paragraph {
   height: 20px;
   width: 100%;
}

.skeleton-chip {
   height: 32px;
   width: 80px;
   border-radius: 16px;
}

.skeleton-table-row {
   height: 52px;
   width: 100%;
   margin-bottom: 0.25rem;
}

.skeleton-circle {
   border-radius: 50% !important;
}

.skeleton-tile {
   border-radius: 0 !important;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
   .skeleton-item {
      background: linear-gradient(90deg, #2a2a2a 25%, #1a1a1a 50%, #2a2a2a 75%);
      background-size: 200% 100%;
   }

   .skeleton-divider {
      background: #3a3a3a;
   }
}
</style>
