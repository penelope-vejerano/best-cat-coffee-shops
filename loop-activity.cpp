#include <iostream>
using namespace std;

int main() {
    int limit;

    cout << "Enter the limit: ";
    cin >> limit;

    int numbers[100];

    for (int i = 0; i < limit; i++) {
        cout << "Enter integer " << (i + 1) << ": ";
        cin >> numbers[i];
    }

    cout << "\nYou entered " << limit << " integer(s):\n";
    for (int i = 0; i < limit; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;

    return 0;
}
