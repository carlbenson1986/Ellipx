import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const TextPage = lazy(() => import('../pages/TextPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export default function AppRouter() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="*" element={<ErrorPage status={404} message="Page not found." />} />
      </Routes>
    </Suspense>
  );
}
