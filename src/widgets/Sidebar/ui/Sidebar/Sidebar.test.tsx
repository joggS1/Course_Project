import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';

describe('Sidebar', () => {
    test('to be in the document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
