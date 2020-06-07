using System;
using System.Threading.Tasks;


public class NotifierService
{
    // Can be called from anywhere
    public async Task Update(bool Visible)
    {
        if (Notify != null)
        {
            await Notify.Invoke(Visible);
        }
    }

    public event Func<bool, Task> Notify;
}