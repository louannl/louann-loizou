import { lazy, Suspense, useLayoutEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { projects } from '../data/projects.mjs';

const ProjectCaseStudy = lazy(() => import('./ProjectCaseStudy'));

export function CaseStudyLink({ slug, ...props }) {
  const { search, hash } = useLocation();
  const params = new URLSearchParams(search);
  params.set('project', slug);

  return (
    <Link
      to={{ search: params.toString(), hash }}
      state={{ openedCaseStudy: true }}
      aria-haspopup="dialog"
      onClick={event => event.currentTarget.focus({ preventScroll: true })}
      {...props}
    />
  );
}

function CaseStudy({ project, dismiss }) {
  const dialog = useRef(null);

  useLayoutEffect(() => {
    const element = dialog.current;
    const opener = document.activeElement;
    element.showModal();
    return () => {
      element.close();
      if (opener instanceof HTMLElement && opener.isConnected) {
        opener.focus({ preventScroll: true });
      }
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="portfolio-case-dialog"
      aria-label={project.title}
      onCancel={event => {
        event.preventDefault();
        dismiss();
      }}
      onClick={event => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div className="portfolio-case-dialog-top sticky top-0 z-10 flex justify-end">
        <button type="button" className="portfolio-case-link" aria-label="Close case study" onClick={dismiss}>
          Close
        </button>
      </div>
      <Suspense fallback={<p className="px-6 py-8 text-themeLightGrey" role="status">Loading case study…</p>}>
        <ProjectCaseStudy project={project} />
      </Suspense>
    </dialog>
  );
}

export default function CaseStudyDialog() {
  const { pathname, hash, search, state } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const project = projects.find(item => item.slug === params.get('project'));

  if (pathname !== '/' || !project) return null;

  const dismiss = () => {
    if (state?.openedCaseStudy) {
      navigate(-1);
      return;
    }

    params.delete('project');
    navigate({ hash, search: params.toString() }, { replace: true });
  };

  return <CaseStudy key={project.slug} project={project} dismiss={dismiss} />;
}
