'use client';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
  attribute="class"
  defaultTheme="dark"  // ← 默认暗色模式
  enableSystem={false} // ← 禁用根据系统自动切换（可选）
>
      {children}
    </NextThemesProvider>
  );
}
