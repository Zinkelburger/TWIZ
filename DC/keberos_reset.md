# Resetting Kerberos
I have a script to do this, microsoft recommends waiting 10 hours as this when the default Ticket-Granting Ticket (TGT) lifetime ends. If you have more than one DC you should wait longer / monitor the system logs to see that the first change has been replicated before changing it a second time.

<https://www.csoonline.com/article/570539/how-to-reset-kerberos-account-passwords-in-an-active-directory-environment.html>

<https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/forest-recovery-guide/ad-forest-recovery-reset-the-krbtgt-password>